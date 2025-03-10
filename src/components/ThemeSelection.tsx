
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  DollarSign, Users, Code, ArrowUpRight, Building, FileText, 
  Heart, Target, User, Puzzle, ChevronRight
} from "lucide-react";

export type Theme = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

// Define all available themes
const allThemes: Theme[] = [
  {
    id: "fundraising",
    title: "Fundraising",
    description: "Pitch decks, valuation, investor relations, SAFEs, and funding strategies",
    icon: "dollar-sign"
  },
  {
    id: "team-building",
    title: "Team Building",
    description: "Hiring, equity, company culture, remote vs. in-person, founder relationships",
    icon: "users"
  },
  {
    id: "product-development",
    title: "Product Development",
    description: "MVP strategies, feature prioritization, product-market fit, technical decisions",
    icon: "code"
  },
  {
    id: "growth-marketing",
    title: "Growth & Marketing",
    description: "Customer acquisition, CAC, growth channels, content strategy, paid advertising",
    icon: "arrow-up-right"
  },
  {
    id: "business-model",
    title: "Business Model",
    description: "Pricing strategies, subscription models, enterprise sales, revenue diversification",
    icon: "building"
  },
  {
    id: "legal-operations",
    title: "Legal & Operations",
    description: "Incorporation, IP protection, compliance, accounting, HR policies",
    icon: "file-text"
  },
  {
    id: "psychological-challenges",
    title: "Psychological Challenges",
    description: "Founder burnout, imposter syndrome, work-life balance, handling rejection",
    icon: "heart"
  },
  {
    id: "strategic-decisions",
    title: "Strategic Decisions",
    description: "Pivoting vs persisting, competition analysis, timing market entry, partnerships",
    icon: "target"
  },
  {
    id: "customer-development",
    title: "Customer Development",
    description: "User interviews, feedback loops, churn reduction, community building",
    icon: "user"
  },
  {
    id: "industry-specific",
    title: "Industry-Specific Challenges",
    description: "Regulatory hurdles, supply chains, data acquisition, compliance issues",
    icon: "puzzle"
  }
];

interface ThemeSelectionProps {
  setSelectedTheme: (theme: Theme) => void;
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

const ThemeSelection = ({ setSelectedTheme }: ThemeSelectionProps) => {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          What would you like to discuss?
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Select a topic to get targeted advice from your chosen YC partner
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {allThemes.map((theme, index) => (
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
