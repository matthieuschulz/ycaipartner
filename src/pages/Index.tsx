
import { useState } from "react";
import Welcome from "@/components/Welcome";
import PartnerSelection from "@/components/PartnerSelection";
import ChatInterface from "@/components/ChatInterface";
import { PartnerData } from "@/data/partners";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const Index = () => {
  const [businessType, setBusinessType] = useState<string | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(null);

  // Reset function to go back to welcome screen
  const resetApp = () => {
    setBusinessType(null);
    setSelectedPartner(null);
  };

  return (
    <AuroraBackground intensity="high" showRadialGradient={true}>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 border-b border-slate-200/20 bg-white/10 backdrop-blur-xl dark:border-slate-800/20 dark:bg-zinc-950/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="font-bold text-[#F26522] text-xl">YC</span>
              <span className="font-medium">Partner Chat</span>
            </motion.div>
            
            {(businessType || selectedPartner) && (
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={resetApp}
                className="text-sm bg-slate-200/30 hover:bg-slate-200/50 dark:bg-slate-800/30 dark:hover:bg-slate-800/50 rounded-full px-4 py-1.5 transition-colors"
              >
                Start Over
              </motion.button>
            )}
          </div>
        </header>
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {!businessType ? (
              <Welcome setBusinessType={setBusinessType} />
            ) : !selectedPartner ? (
              <PartnerSelection 
                businessType={businessType} 
                setSelectedPartner={setSelectedPartner} 
              />
            ) : (
              <ChatInterface partner={selectedPartner} />
            )}
          </motion.div>
        </main>
        
        <footer className="border-t border-slate-200/20 bg-white/10 backdrop-blur-xl dark:border-slate-800/20 dark:bg-zinc-950/10">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-sm text-gray-500">
              This is a simulation of YC partner conversations for educational purposes.
              <span className="block mt-1">Not affiliated with Y Combinator.</span>
            </p>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
};

export default Index;
