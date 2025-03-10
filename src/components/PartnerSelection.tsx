
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRecommendedPartners, PartnerData } from "@/data/partners";
import { Badge } from "@/components/ui/badge";

interface PartnerSelectionProps {
  businessType: string;
  setSelectedPartner: (partner: PartnerData) => void;
}

const PartnerCard = ({ partner, onSelect }: { 
  partner: PartnerData, 
  onSelect: () => void 
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all border">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <img 
            src={partner.photo} 
            alt={partner.name} 
            className="w-24 h-24 rounded-md object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{partner.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{partner.role}</p>
            <p className="text-sm mb-3">{partner.description}</p>
            
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">Expertise:</p>
              <div className="flex flex-wrap gap-1">
                {partner.expertise.slice(0, 3).map(skill => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 mb-1">Notable startups:</p>
              <p className="text-xs text-gray-700">{partner.notableStartups.join(", ")}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <Button 
            onClick={onSelect}
            className="w-full bg-[#F26522] hover:bg-[#D55411] text-white"
          >
            Chat with {partner.name.split(" ")[0]}
          </Button>
        </div>
      </div>
    </Card>
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
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Recommended Partners</h2>
        <p className="text-gray-600">
          These YC partners have expertise in {formatBusinessType(businessType)} startups
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {recommendedPartners.map(partner => (
          <PartnerCard
            key={partner.id}
            partner={partner}
            onSelect={() => setSelectedPartner(partner)}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerSelection;
