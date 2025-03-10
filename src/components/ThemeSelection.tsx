
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  DollarSign, Users, Code, ArrowUpRight, Building, FileText, 
  Heart, Target, User, Puzzle, ChevronRight
} from "lucide-react";
import { PartnerData } from "@/data/partners";

export type Theme = {
  id: string;
  title: string;
  description: string;
  icon: string;
  // Which expertise areas this theme relates to (empty means it's general)
  relatedExpertise: string[];
};

// Define all available themes
const allThemes: Theme[] = [
  {
    id: "fundraising",
    title: "Fundraising",
    description: "Pitch decks, valuation, investor relations, SAFEs, and funding strategies",
    icon: "dollar-sign",
    relatedExpertise: ["Fundraising", "Growth Strategy", "Business Models"]
  },
  {
    id: "team-building",
    title: "Team Building",
    description: "Hiring, equity, company culture, remote vs. in-person, founder relationships",
    icon: "users",
    relatedExpertise: ["Team Building", "Company Building", "Founder Pitfalls"]
  },
  {
    id: "product-development",
    title: "Product Development",
    description: "MVP strategies, feature prioritization, product-market fit, technical decisions",
    icon: "code",
    relatedExpertise: ["Product Development", "Technical Development", "Product Innovation", "Product-Market Fit"]
  },
  {
    id: "growth-marketing",
    title: "Growth & Marketing",
    description: "Customer acquisition, CAC, growth channels, content strategy, paid advertising",
    icon: "arrow-up-right",
    relatedExpertise: ["Growth Strategy", "Growth Experimentation", "Marketing Technology", "AdTech"]
  },
  {
    id: "business-model",
    title: "Business Model",
    description: "Pricing strategies, subscription models, enterprise sales, revenue diversification",
    icon: "building",
    relatedExpertise: ["Business Models", "B2B Strategy", "B2B Sales"]
  },
  {
    id: "legal-operations",
    title: "Legal & Operations",
    description: "Incorporation, IP protection, compliance, accounting, HR policies",
    icon: "file-text",
    relatedExpertise: [] // General theme - available to all partners
  },
  {
    id: "psychological-challenges",
    title: "Psychological Challenges",
    description: "Founder burnout, imposter syndrome, work-life balance, handling rejection",
    icon: "heart",
    relatedExpertise: [] // General theme - available to all partners
  },
  {
    id: "strategic-decisions",
    title: "Strategic Decisions",
    description: "Pivoting vs persisting, competition analysis, timing market entry, partnerships",
    icon: "target",
    relatedExpertise: [] // General theme - available to all partners
  },
  {
    id: "customer-development",
    title: "Customer Development",
    description: "User interviews, feedback loops, churn reduction, community building",
    icon: "user",
    relatedExpertise: ["Consumer Products", "Marketplace Businesses", "Customer Acquisition"]
  },
  {
    id: "industry-specific",
    title: "Industry-Specific Challenges",
    description: "Regulatory hurdles, supply chains, data acquisition, compliance issues",
    icon: "puzzle",
    relatedExpertise: ["Fintech", "Banking", "Healthcare Startups", "Hard Tech", "AR/VR Technology", "Regulatory Strategy"]
  }
];

interface ThemeSelectionProps {
  setSelectedTheme: (theme: Theme) => void;
  partner: PartnerData;
}

const ThemeIcon = ({ iconName }: { iconName: string }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    "dollar-sign": <DollarSign className="w-5 h-5" />,
    "users": <Users className="w-5 h-5" />,
    "code": <Code className="w-5 h-5" />,
    "arrow-up-right": <ArrowUpRight className="w-5 h-5" />,
    "building": <Building className="w-5 h-5" />,
    "file-text": <FileText className="w-5 h-5" />,
    "heart": <Heart className="w-5 h-5" />,
    "target": <Target className="w-5 h-5" />,
    "user": <User className="w-5 h-5" />,
    "puzzle": <Puzzle className="w-5 h-5" />
  };

  return iconMap[iconName] || null;
};

const ThemeCard = ({ theme, onSelect, index }: {
  theme: Theme;
  onSelect: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="w-full"
    >
      <Card 
        className="overflow-hidden group border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:border-orange-500/30 hover:shadow-lg transition-all cursor-pointer"
        onClick={onSelect}
      >
        <div className="p-4 flex items-center">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mr-4">
            <ThemeIcon iconName={theme.icon} />
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-lg group-hover:text-orange-500 transition-colors">
              {theme.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
              {theme.description}
            </p>
          </div>
          
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
        </div>
      </Card>
    </motion.div>
  );
};

const ThemeSelection = ({ setSelectedTheme, partner }: ThemeSelectionProps) => {
  // Filter themes based on partner expertise
  const filteredThemes = allThemes.filter(theme => {
    // If theme has no related expertise, it's a general theme for all partners
    if (theme.relatedExpertise.length === 0) {
      return true;
    }
    
    // Check if any of the partner's expertise matches the theme's related expertise
    return theme.relatedExpertise.some(exp => 
      partner.expertise.some(partnerExp => 
        partnerExp.toLowerCase().includes(exp.toLowerCase()) || 
        exp.toLowerCase().includes(partnerExp.toLowerCase())
      )
    );
  });

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          What would you like to discuss with {partner.name.split(" ")[0]}?
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Select a topic to get targeted advice based on {partner.name.split(" ")[0]}'s expertise
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredThemes.map((theme, index) => (
          <ThemeCard
            key={theme.id}
            theme={theme}
            index={index}
            onSelect={() => setSelectedTheme(theme)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelection;
