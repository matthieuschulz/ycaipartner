
import { useState } from "react";
import Welcome from "@/components/Welcome";
import PartnerSelection from "@/components/PartnerSelection";
import ChatInterface from "@/components/ChatInterface";
import { PartnerData } from "@/data/partners";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  const [businessType, setBusinessType] = useState<string | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(null);

  // Reset function to go back to welcome screen
  const resetApp = () => {
    setBusinessType(null);
    setSelectedPartner(null);
  };

  return (
    <AuroraBackground className="min-h-screen" showRadialGradient={true}>
      <div className="w-full flex flex-col">
        <header className="bg-white/80 backdrop-blur-sm shadow-sm py-4 w-full">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#F26522] text-xl">YC</span>
              <span className="font-medium">Partner Chat</span>
            </div>
            {(businessType || selectedPartner) && (
              <button 
                onClick={resetApp}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Start Over
              </button>
            )}
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8 max-w-4xl flex-1 z-10">
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
        </main>
        
        <footer className="py-6 bg-white/80 backdrop-blur-sm border-t w-full z-10">
          <div className="container mx-auto px-4 text-center text-sm text-gray-500">
            <p>This is a simulation of YC partner conversations for educational purposes.</p>
            <p>Not affiliated with Y Combinator.</p>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
};

export default Index;
