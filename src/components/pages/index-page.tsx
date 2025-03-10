'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { PartnerData } from "@/data/partners";
import { AuroraBackground } from "@/components/ui/aurora-background";
import usePersistedState from "@/hooks/use-persisted-state";
import { Theme, getThemeById } from "@/data/themes";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Dynamically import components with SSR disabled
const Welcome = dynamic(() => import("@/components/Welcome"), { ssr: false });
const PartnerSelection = dynamic(() => import("@/components/PartnerSelection"), { ssr: false });
const ThemeSelection = dynamic(() => import("@/components/ThemeSelection"), { ssr: false });
const ChatInterface = dynamic(() => import("@/components/ChatInterface"), { ssr: false });

export function IndexPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [businessType, setBusinessType] = usePersistedState<string | null>("businessType", null);
  const [selectedPartner, setSelectedPartner] = usePersistedState<PartnerData | null>("selectedPartner", null);
  const [selectedTheme, setSelectedTheme] = usePersistedState<Theme | null>("selectedTheme", null);
  const [mounted, setMounted] = useState(false);

  // Set mounted to true once component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update URL when state changes
  useEffect(() => {
    if (!mounted) return;
    
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
  }, [businessType, selectedPartner, selectedTheme, router, mounted]);

  // Load state from URL on initial load
  useEffect(() => {
    if (!searchParams || !mounted) return;
    
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
  }, [searchParams, businessType, selectedPartner, selectedTheme, setBusinessType, setSelectedPartner, setSelectedTheme, mounted]);

  // Reset function to go back to welcome screen
  const resetApp = () => {
    // Clear state immediately
    setBusinessType(null);
    setSelectedPartner(null);
    setSelectedTheme(null);
    
    // Clear localStorage keys synchronously
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem("businessType");
        localStorage.removeItem("selectedPartner");
        localStorage.removeItem("selectedTheme");
      } catch (e) {
        console.error("Error clearing localStorage:", e);
      }
      
      // Force full reload and navigation to the root URL
      window.location.href = window.location.origin + "/";
    } else {
      // Fallback to router
      router.replace("/");
    }
  };

  // Determine which component to render based on state
  const renderContent = () => {
    if (!mounted) {
      return <div className="flex items-center justify-center h-[50vh]">Loading...</div>;
    }
    
    if (!businessType) {
      return <Welcome setBusinessType={setBusinessType} />;
    } else if (!selectedPartner) {
      return <PartnerSelection businessType={businessType} setSelectedPartner={setSelectedPartner} />;
    } else if (!selectedTheme) {
      return <ThemeSelection partner={selectedPartner} setSelectedTheme={setSelectedTheme} />;
    } else {
      return <ChatInterface partner={selectedPartner} theme={selectedTheme} />;
    }
  };

  return (
    <AuroraBackground intensity="high" showRadialGradient={true}>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 border-b border-slate-200/20 bg-white/10 backdrop-blur-xl dark:border-slate-800/20 dark:bg-zinc-950/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div 
              onClick={resetApp}
              className="flex items-center gap-2 cursor-pointer"
              role="button"
              aria-label="Go to home page"
            >
              <span className="font-bold text-[#F26522] text-xl">YC</span>
              <span className="font-medium">AI Partner Office Hours</span>
            </div>
            
            {mounted && (businessType || selectedPartner || selectedTheme) && (
              <button 
                onClick={resetApp}
                className="text-sm bg-slate-200/30 hover:bg-slate-200/50 dark:bg-slate-800/30 dark:hover:bg-slate-800/50 rounded-full px-4 py-1.5 transition-colors"
              >
                Start Over
              </button>
            )}
          </div>
        </header>
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
          {renderContent()}
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