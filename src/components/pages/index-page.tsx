'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Welcome from "@/components/Welcome";
import PartnerSelection from "@/components/PartnerSelection";
import ThemeSelection from "@/components/ThemeSelection";
import ChatInterface from "@/components/ChatInterface";
import { PartnerData } from "@/data/partners";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import usePersistedState from "@/hooks/use-persisted-state";
import { Theme, getThemeById } from "@/data/themes";
import { useRouter } from "next/navigation";

export function IndexPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [businessType, setBusinessType] = usePersistedState<string | null>("businessType", null);
  const [selectedPartner, setSelectedPartner] = usePersistedState<PartnerData | null>("selectedPartner", null);
  const [selectedTheme, setSelectedTheme] = usePersistedState<Theme | null>("selectedTheme", null);

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (businessType) {
      params.set("businessType", businessType);
    }
    
    if (selectedPartner) {
      params.set("partnerId", selectedPartner.id);
    }
    
    if (selectedTheme) {
      params.set("themeId", selectedTheme.id);
    }
    
    const newUrl = params.toString() ? `/?${params.toString()}` : '/';
    router.replace(newUrl);
  }, [businessType, selectedPartner, selectedTheme, router]);

  // Load state from URL on initial load
  useEffect(() => {
    if (!searchParams) return;
    
    const businessTypeParam = searchParams.get("businessType");
    const partnerIdParam = searchParams.get("partnerId");
    const themeIdParam = searchParams.get("themeId");
    
    if (businessTypeParam && !businessType) {
      setBusinessType(businessTypeParam);
    }
    
    // We'll need to fetch the partner and theme data based on IDs
    if (partnerIdParam && !selectedPartner) {
      // Fetch partner data by ID and set it
      import("@/data/partners").then(module => {
        const partner = module.getPartnerById?.(partnerIdParam);
        if (partner) setSelectedPartner(partner);
      });
    }
    
    if (themeIdParam && !selectedTheme && selectedPartner) {
      // Find theme by ID using our helper function
      const theme = getThemeById(themeIdParam);
      if (theme) setSelectedTheme(theme);
    }
  }, [searchParams, businessType, selectedPartner, selectedTheme, setBusinessType, setSelectedPartner, setSelectedTheme]);

  // Reset function to go back to welcome screen
  const resetApp = () => {
    setBusinessType(null);
    setSelectedPartner(null);
    setSelectedTheme(null);
    
    // Clear localStorage keys
    localStorage.removeItem("businessType");
    localStorage.removeItem("selectedPartner");
    localStorage.removeItem("selectedTheme");
    
    // Navigate to home without query params
    router.replace('/');
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
              className="flex items-center gap-2 cursor-pointer"
              onClick={resetApp}
              role="button"
              aria-label="Go to home page"
            >
              <span className="font-bold text-[#F26522] text-xl">YC</span>
              <span className="font-medium">AI Partner Office Hours</span>
            </motion.div>
            
            {(businessType || selectedPartner || selectedTheme) && (
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
            ) : !selectedTheme ? (
              <ThemeSelection
                partner={selectedPartner}
                setSelectedTheme={setSelectedTheme}
              />
            ) : (
              <ChatInterface 
                partner={selectedPartner} 
                theme={selectedTheme}
              />
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
} 