
import { useState } from "react";
import Welcome from "@/components/Welcome";
import PartnerSelection from "@/components/PartnerSelection";
import ChatInterface from "@/components/ChatInterface";
import { PartnerData } from "@/data/partners";

const Index = () => {
  const [businessType, setBusinessType] = useState<string | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(null);

  // Reset function to go back to welcome screen
  const resetApp = () => {
    setBusinessType(null);
    setSelectedPartner(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm py-4">
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
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
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
      
      <footer className="py-6 bg-white border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>This is a simulation of YC partner conversations for educational purposes.</p>
          <p>Not affiliated with Y Combinator.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
