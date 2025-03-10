'use client'

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, ExternalLink, Copy, RefreshCcw } from "lucide-react";
import { PartnerData } from "@/data/partners";
import { Theme } from "@/data/themes";
import { 
  ChatBubble, 
  ChatBubbleAvatar, 
  ChatBubbleMessage, 
  ChatBubbleAction,
  ChatBubbleActionWrapper
} from "@/components/ui/chat-bubble";
import { AIInputWithSearch } from "../../components/ui/ai-input-with-search";

interface Reference {
  text: string;
  url: string;
  timestamp?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'partner';
  text: string;
  timestamp: Date;
  references?: Reference[];
}

interface ChatInterfaceProps {
  partner: PartnerData;
  theme: Theme;
}

// Generate a welcome message based on partner profile and selected theme
const generateWelcomeMessage = (partner: PartnerData, theme: Theme): Message => {
  // Base welcome texts from partners
  const baseWelcomeTexts: {[key: string]: string} = {
    "garry-tan": "Hey there! Garry Tan here.",
    "michael-seibel": "Hi, Michael Seibel here.",
    "dalton-caldwell": "Hello, I'm Dalton.",
    "jared-friedman": "Hi there, Jared Friedman here.",
    "adora-cheung": "Hey, Adora here."
  };
  
  // Theme-specific additions
  const themeTexts: {[key: string]: {[key: string]: string}} = {
    "fundraising": {
      "garry-tan": "I'd love to chat about fundraising strategy. Having both raised funds as a founder and invested as a VC, I have perspective from both sides of the table. What specific fundraising challenges are you facing?",
      "michael-seibel": "Let's talk fundraising. I believe in focusing on the fundamentals: building something people want first, then raising money to accelerate. What stage are you at in your fundraising journey?",
      "dalton-caldwell": "I help YC companies prepare for fundraising with a rigorous, data-driven approach. What metrics do you currently have to show investors?"
    },
    "team-building": {
      "garry-tan": "Building great teams is one of the most important things you'll do as a founder. I've seen how early hiring decisions can make or break a startup. What's your current team situation?",
      "michael-seibel": "Team building is crucial. I always tell founders that hiring too quickly is more dangerous than hiring too slowly. What kind of roles are you looking to fill?"
    }
  };
  
  // Get partner's base welcome text
  let welcomeText = baseWelcomeTexts[partner.id] || `Hi, I'm ${partner.name}.`;
  
  // Add theme-specific text if available
  if (themeTexts[theme.id]?.[partner.id]) {
    welcomeText += " " + themeTexts[theme.id][partner.id];
  } else {
    // Generic theme-specific greeting if no specific one exists
    welcomeText += ` I see you want to discuss ${theme.title.toLowerCase()}. That's a critical area for startups. What specific questions do you have about this topic?`;
  }
  
  return {
    id: '1',
    sender: 'partner',
    text: welcomeText,
    timestamp: new Date()
  };
};

const ChatInterface = ({ partner, theme }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  
  // Initialize chat with welcome message
  useEffect(() => {
    const welcomeMessage = generateWelcomeMessage(partner, theme);
    setMessages([welcomeMessage]);
  }, [partner, theme]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate partner response (in a real app, this would call an API)
    setTimeout(() => {
      // Theme-specific responses based on partner and theme
      const mockResponses: {[key: string]: {[key: string]: {text: string, references?: Reference[]}}} = {
        "fundraising": {
          "garry-tan": {
            text: "When it comes to fundraising, one thing I always emphasize is the story you tell investors. It needs to be compelling, concise, and backed by evidence of progress. At Posterous, we learned that showing traction speaks louder than just ideas.",
            references: [
              {
                text: "I talked about effective fundraising narratives in this video",
                url: "https://www.youtube.com/watch?v=FBOLk9s9Ci4",
                timestamp: "5:23"
              }
            ]
          },
          "michael-seibel": {
            text: "For early-stage fundraising, focus on demonstrating that you've found a problem worth solving and that your solution has potential. Investors at this stage are betting on you and your team more than anything else.",
            references: [
              {
                text: "I explain my fundraising philosophy in detail here",
                url: "https://www.youtube.com/watch?v=1hHMwLxN6EM",
                timestamp: "2:15"
              }
            ]
          }
        },
        "team-building": {
          "garry-tan": {
            text: "The first 10 hires will define your company culture. Look for people who are not just technically strong but also aligned with your mission and values. I've seen startups succeed with smaller, highly motivated teams over larger, less committed ones.",
            references: [
              {
                text: "I discussed team building principles in this talk",
                url: "https://www.youtube.com/watch?v=XqPATdUEQpY",
                timestamp: "8:42"
              }
            ]
          },
          "michael-seibel": {
            text: "When building your team, prioritize effectiveness over experience. I'd take someone who gets things done fast and learns quickly over someone with an impressive resume but moves slowly. Early startup teams need speed and adaptability above all.",
            references: [
              {
                text: "Watch my advice on early hiring decisions",
                url: "https://www.youtube.com/watch?v=8KrMaF5asEk",
                timestamp: "3:27"
              }
            ]
          }
        }
      };
      
      // Try to get a theme-specific response
      const themeResponses = mockResponses[theme.id];
      const partnerResponse = themeResponses && themeResponses[partner.id] 
        ? themeResponses[partner.id] 
        : {
            text: `As we discuss ${theme.title}, I'd recommend focusing on what your users actually need rather than what you think they want. This principle applies across all startup areas, including ${theme.title.toLowerCase()}.`,
            references: [
              {
                text: "I discuss this approach in depth in this YC talk",
                url: "https://www.youtube.com/watch?v=yP176MBG9Tk",
                timestamp: "4:19"
              }
            ]
          };
      
      const responseMessage: Message = {
        id: Date.now().toString(),
        sender: 'partner',
        text: partnerResponse.text,
        timestamp: new Date(),
        references: partnerResponse.references
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleAIInputSubmit = (value: string, withSearch: boolean) => {
    if (!value.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: value,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = generateResponse(value, withSearch);
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  // Generate AI response based on user input
  const generateResponse = (userInput: string, withSearch: boolean): Message => {
    // Sample references when search is enabled
    const references = withSearch ? [
      {
        text: "Related article about " + theme.title,
        url: "https://example.com/article",
        timestamp: "2023"
      },
      {
        text: "Research paper on " + theme.title,
        url: "https://example.com/research",
        timestamp: "2022"
      }
    ] : undefined;
    
    return {
      id: Date.now().toString(),
      sender: 'partner',
      text: `This is a simulated response to "${userInput}" ${withSearch ? 'with web search' : 'without web search'} about ${theme.title} from ${partner.name}.`,
      timestamp: new Date(),
      references
    };
  };

  return (
    <div className="flex flex-col h-[calc(100vh-240px)] min-h-[500px]">
      <div className="bg-white shadow-sm rounded-lg p-4 mb-4 flex items-center">
        <img 
          src={partner.photo} 
          alt={partner.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex-1">
          <h2 className="font-bold text-lg">{partner.name}</h2>
          <p className="text-sm text-gray-600">{partner.role}</p>
        </div>
        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
          <span>Topic: {theme.title}</span>
        </div>
      </div>
      
      <Card className="flex-1 flex flex-col p-4 mb-4 overflow-hidden">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map(message => (
              <ChatBubble 
                key={message.id} 
                variant={message.sender === 'user' ? 'sent' : 'received'}
              >
                <ChatBubbleAvatar 
                  src={message.sender === 'user' 
                    ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop'
                    : partner.photo
                  }
                  fallback={message.sender === 'user' ? 'US' : partner.name.charAt(0)}
                />
                <div className="flex-1">
                  <ChatBubbleMessage 
                    variant={message.sender === 'user' ? 'sent' : 'received'}
                    className={message.sender === 'user' 
                      ? 'bg-[#F26522] text-white' 
                      : 'bg-gray-100 text-gray-800'
                    }
                  >
                    <p>{message.text}</p>
                    
                    {message.references && message.references.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-300 text-xs">
                        {message.references.map((ref, i) => (
                          <a 
                            key={i}
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:underline mt-1"
                          >
                            <ExternalLink size={12} className="mr-1" />
                            {ref.text} {ref.timestamp && `(${ref.timestamp})`}
                          </a>
                        ))}
                      </div>
                    )}
                  </ChatBubbleMessage>
                  
                  {message.sender === 'partner' && (
                    <ChatBubbleActionWrapper>
                      <ChatBubbleAction 
                        icon={<Copy className="h-3 w-3" />} 
                        onClick={() => navigator.clipboard.writeText(message.text)}
                      />
                      <ChatBubbleAction 
                        icon={<RefreshCcw className="h-3 w-3" />} 
                        onClick={() => {
                          // Remove the last message and trigger a new response
                          setMessages(prev => prev.slice(0, -1));
                          setIsLoading(true);
                          
                          // Simulate partner response with a timeout
                          setTimeout(() => {
                            // Get the same response logic as in handleSubmit
                            const mockResponses: {[key: string]: {[key: string]: {text: string, references?: Reference[]}}} = {
                              "fundraising": {
                                "garry-tan": {
                                  text: "When it comes to fundraising, one thing I always emphasize is the story you tell investors. It needs to be compelling, concise, and backed by evidence of progress. At Posterous, we learned that showing traction speaks louder than just ideas.",
                                  references: [
                                    {
                                      text: "I talked about effective fundraising narratives in this video",
                                      url: "https://www.youtube.com/watch?v=FBOLk9s9Ci4",
                                      timestamp: "5:23"
                                    }
                                  ]
                                },
                                // Other partners...
                              },
                              // Other themes...
                            };
                            
                            // Try to get a theme-specific response
                            const themeResponses = mockResponses[theme.id];
                            const partnerResponse = themeResponses && themeResponses[partner.id] 
                              ? themeResponses[partner.id] 
                              : {
                                  text: `As we discuss ${theme.title}, I'd recommend focusing on what your users actually need rather than what you think they want. This principle applies across all startup areas, including ${theme.title.toLowerCase()}.`,
                                  references: [
                                    {
                                      text: "I discuss this approach in depth in this YC talk",
                                      url: "https://www.youtube.com/watch?v=yP176MBG9Tk",
                                      timestamp: "4:19"
                                    }
                                  ]
                                };
                            
                            const responseMessage: Message = {
                              id: Date.now().toString(),
                              sender: 'partner',
                              text: partnerResponse.text,
                              timestamp: new Date(),
                              references: partnerResponse.references
                            };
                            
                            setMessages(prev => [...prev, responseMessage]);
                            setIsLoading(false);
                          }, 1500);
                        }}
                      />
                    </ChatBubbleActionWrapper>
                  )}
                </div>
              </ChatBubble>
            ))}
            {isLoading && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar 
                  src={partner.photo}
                  fallback={partner.name.charAt(0)}
                />
                <ChatBubbleMessage isLoading />
              </ChatBubble>
            )}
            <div ref={bottomRef} />
          </div>
        </ScrollArea>
        
        <div className="border-t border-gray-200 dark:border-gray-700"></div>
        <div className="px-4 pb-4">
          <AIInputWithSearch 
            placeholder="Ask about this topic..."
            onSubmit={handleAIInputSubmit}
            onFileSelect={(file) => {
              console.log('File selected:', file);
              // Handle file upload logic here
            }}
            className="w-full"
          />
        </div>
      </Card>
      
      <div className="text-xs text-gray-500 text-center">
        <p>This is a simulated conversation about {theme.title.toLowerCase()} based on {partner.name}'s public content and expertise.</p>
        <p>Responses are generated for educational purposes and are not actual advice from {partner.name}.</p>
      </div>
    </div>
  );
};

export default ChatInterface;
