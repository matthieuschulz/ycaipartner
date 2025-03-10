'use client'

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRecommendedPartners, PartnerData } from "@/data/partners";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PartnerSelectionProps {
  businessType: string;
  setSelectedPartner: (partner: PartnerData) => void;
}

const PartnerCard = ({ partner, onSelect, index }: { 
  partner: PartnerData;
  onSelect: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group hover:shadow-xl transition-all border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-orange-500/30">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="relative">
              <img 
                src={partner.photo} 
                alt={partner.name} 
                className="w-24 h-24 rounded-xl object-cover border border-slate-200/50 dark:border-slate-800/50 group-hover:border-orange-500/20 transition-colors"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold group-hover:text-orange-500 transition-colors">{partner.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{partner.role}</p>
              
              <ScrollArea className="h-[80px] mb-3">
                <p className="text-sm pr-4">{partner.description}</p>
              </ScrollArea>
              
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">Expertise:</p>
                <div className="flex flex-wrap gap-1">
                  {partner.expertise.slice(0, 3).map(skill => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">Notable startups:</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">{partner.notableStartups.join(", ")}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5">
            <Button 
              onClick={onSelect}
              className="w-full bg-gradient-to-r from-[#F26522] to-[#F95738] hover:from-[#E55411] hover:to-[#E84627] text-white shadow-md hover:shadow-lg transition-all"
            >
              Chat with {partner.name.split(" ")[0]}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const PartnerSelection = ({ businessType, setSelectedPartner }: PartnerSelectionProps) => {
  const recommendedPartners = getRecommendedPartners(businessType);
  
  // Format business type for display
  const formatBusinessType = (type: string) => {
    switch(type) {
      case "consumer": return "Consumer";
      case "b2b": return "B2B SaaS";
      case "hardware": return "Hardware/Deep Tech";
      case "ai": return "AI/ML";
      case "fintech": return "FinTech";
      case "marketplace": return "Marketplace";
      case "edtech": return "EdTech";
      case "devtools": return "Developer Tools";
      default: return type;
    }
  };

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Recommended Partners
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          These YC partners have expertise in <span className="font-semibold text-orange-500">{formatBusinessType(businessType)}</span> startups
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {recommendedPartners.map((partner, index) => (
          <PartnerCard
            key={partner.id}
            partner={partner}
            index={index}
            onSelect={() => setSelectedPartner(partner)}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerSelection;
