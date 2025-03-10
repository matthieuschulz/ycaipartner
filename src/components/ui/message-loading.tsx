"use client"

import * as React from "react"

export function MessageLoading() {
  return (
    <div className="flex space-x-2">
      <div className="w-2 h-2 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: "0ms" }}></div>
      <div className="w-2 h-2 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: "300ms" }}></div>
      <div className="w-2 h-2 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: "600ms" }}></div>
    </div>
  )
} 