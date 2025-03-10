'use client'

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, Cpu, Lightbulb, Users, DollarSign, ShoppingCart, GraduationCap, Code } from "lucide-react";

interface WelcomeProps {
  setBusinessType: (type: string) => void;
}

const businessCategories = [
  {
    id: "consumer",
    name: "Consumer",
    icon: Users,
    description: "Apps and services used directly by consumers"
  },
  {
    id: "b2b",
    name: "B2B SaaS",
    icon: Building2,
    description: "Software solutions for businesses and enterprises"
  },
  {
    id: "hardware",
    name: "Hardware/Deep Tech",
    icon: Cpu,
    description: "Physical products and advanced technologies"
  },
  {
    id: "ai",
    name: "AI/ML",
    icon: Lightbulb,
    description: "Artificial intelligence and machine learning solutions"
  },
  {
    id: "fintech",
    name: "FinTech",
    icon: DollarSign,
    description: "Financial technology and banking solutions"
  },
  {
    id: "marketplace",
    name: "Marketplace",
    icon: ShoppingCart,
    description: "Platforms connecting buyers and sellers"
  },
  {
    id: "edtech",
    name: "EdTech",
    icon: GraduationCap,
    description: "Educational technology and learning platforms"
  },
  {
    id: "devtools",
    name: "Developer Tools",
    icon: Code,
    description: "Tools and infrastructure for software developers"
  }
];

const Welcome = ({ setBusinessType }: WelcomeProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Chat with YC Partners
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          Get personalized startup advice from simulated conversations with 
          Y Combinator partners based on their expertise and perspectives.
        </p>
      </motion.div>
      
      <div className="w-full max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-semibold mb-6"
        >
          What type of business are you building?
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4"
        >
          {businessCategories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Card 
                className="p-6 cursor-pointer hover:shadow-lg transition-all border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-900/80 hover:border-orange-500/50 group"
                onClick={() => setBusinessType(category.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 p-3 rounded-xl">
                    <category.icon className="h-5 w-5 text-[#F26522] group-hover:text-orange-600 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg group-hover:text-orange-500 transition-colors">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
