"use client";

import React from "react";
import { Globe, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { Textarea } from "../../src/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { useAutoResizeTextarea } from "../../src/hooks/use-auto-resize-textarea";

interface AIInputWithSearchProps {
  id?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  onSubmit?: (value: string, withSearch: boolean) => void;
  onFileSelect?: (file: File) => void;
  className?: string;
}

export function AIInputWithSearch({
  id = "ai-input-with-search",
  placeholder = "Search the web...",
  minHeight = 48,
  maxHeight = 164,
  onSubmit,
  onFileSelect,
  className
}: AIInputWithSearchProps) {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight,
    maxHeight,
  });
  const [showSearch, setShowSearch] = useState(true);

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit?.(value, showSearch);
      setValue("");
      adjustHeight(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect?.(file);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full">
        <div className="relative flex flex-col shadow-sm">
          <div
            className="overflow-y-auto"
            style={{ maxHeight: `${maxHeight}px` }}
          >
            <Textarea
              id={id}
              value={value}
              placeholder={placeholder}
              className="w-full rounded-xl rounded-b-none px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none focus-visible:ring-1 focus-visible:ring-[#F26522] focus-visible:border-[#F26522] leading-[1.2]"
              ref={textareaRef}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
            />
          </div>

          <div className="h-12 bg-white dark:bg-gray-800 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-xl flex items-center justify-between">
            <div className="flex items-center gap-2 ml-3">
              <label className="cursor-pointer rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
                <Paperclip className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors" />
              </label>
              <button
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className={cn(
                  "rounded-full transition-all flex items-center gap-2 px-1.5 py-1 border h-8",
                  showSearch
                    ? "bg-orange-100 border-orange-200 text-orange-800"
                    : "bg-gray-100 dark:bg-gray-700 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                )}
              >
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{
                      rotate: showSearch ? 180 : 0,
                      scale: showSearch ? 1.1 : 1,
                    }}
                    whileHover={{
                      rotate: showSearch ? 180 : 15,
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                    }}
                  >
                    <Globe
                      className={cn(
                        "w-4 h-4",
                        showSearch
                          ? "text-orange-800"
                          : "text-inherit"
                      )}
                    />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {showSearch && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{
                        width: "auto",
                        opacity: 1,
                      }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm overflow-hidden whitespace-nowrap text-orange-800 flex-shrink-0"
                    >
                      Search
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
            <div className="mr-3">
              <button
                type="button"
                onClick={handleSubmit}
                className={cn(
                  "rounded-lg p-2 transition-colors",
                  value
                    ? "bg-[#F26522] text-white hover:bg-[#D55411]"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                )}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 