
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Cpu, Lightbulb, Users } from "lucide-react";

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
  }
];

const Welcome = ({ setBusinessType }: WelcomeProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Chat with YC Partners</h1>
        <p className="text-xl text-gray-700 max-w-2xl">
          Get personalized startup advice from simulated conversations with 
          Y Combinator partners based on their expertise and perspectives.
        </p>
      </div>
      
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">What type of business are you building?</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {businessCategories.map((category) => (
            <Card 
              key={category.id}
              className="p-6 cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-[#F26522]"
              onClick={() => setBusinessType(category.id)}
            >
              <div className="flex items-start">
                <div className="mr-4 bg-orange-100 p-2 rounded-md">
                  <category.icon className="h-6 w-6 text-[#F26522]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{category.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
