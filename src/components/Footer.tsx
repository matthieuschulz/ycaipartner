import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 text-center border-t border-slate-200/20 dark:border-slate-800/20 bg-white/30 dark:bg-black/30 backdrop-blur-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-base font-medium text-gray-800 dark:text-gray-200">Made with ❤️ by</span>
            <Link 
              href="https://twitter.com/matthieuschulz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-[#F26522] hover:underline transition-colors"
            >
              @matthieuschulz
            </Link>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            <p className="mt-1">Not affiliated with Y Combinator.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 