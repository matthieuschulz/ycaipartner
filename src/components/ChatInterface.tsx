
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, ArrowLeft, ExternalLink } from "lucide-react";
import { PartnerData } from "@/data/partners";

interface Message {
  id: string;
  sender: 'user' | 'partner';
  text: string;
  timestamp: Date;
  references?: {
    text: string;
    url: string;
    timestamp?: string;
  }[];
}

interface ChatInterfaceProps {
  partner: PartnerData;
}

// Generate a welcome message based on partner profile
const generateWelcomeMessage = (partner: PartnerData): Message => {
  const welcomeTexts: {[key: string]: string} = {
    "garry-tan": "Hey there! Garry Tan here. I'm excited to chat about your startup journey. I've worked with thousands of founders from the earliest stages at companies like Coinbase, Instacart, and Stripe. What are you building?",
    "michael-seibel": "Hi, Michael Seibel here. I'm a big believer in focusing on the fundamentals. Before we dive in, tell me about your startup idea and what progress you've made so far.",
    "dalton-caldwell": "Hello, I'm Dalton. I help startups find product-market fit through rigorous measurement and iteration. What specific challenge are you facing with your business right now?",
    "jared-friedman": "Hi there, Jared Friedman here. I focus on technically complex startups, especially in AI and healthcare. I'd love to hear about what you're building and the technical challenges you're facing.",
    "adora-cheung": "Hey, Adora here. I've built marketplace businesses and worked with many consumer startups. I'd love to hear about what you're working on and how you're thinking about growth."
  };

  return {
    id: '1',
    sender: 'partner',
    text: welcomeTexts[partner.id] || `Hi, I'm ${partner.name}. What can I help you with today?`,
    timestamp: new Date()
  };
};

const ChatInterface = ({ partner }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  
  // Initialize chat with welcome message
  useEffect(() => {
    const welcomeMessage = generateWelcomeMessage(partner);
    setMessages([welcomeMessage]);
  }, [partner]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
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
      const mockResponses: {[key: string]: {text: string, references?: any[]}} = {
        "garry-tan": {
          text: "That's really interesting! When I think about early-stage products, I always emphasize the importance of talking directly to users and iterating quickly. At Posterous, we learned that the hard way.",
          references: [
            {
              text: "I discussed this approach in my talk on product-market fit",
              url: "https://www.youtube.com/watch?v=FBOLk9s9Ci4",
              timestamp: "5:23"
            }
          ]
        },
        "michael-seibel": {
          text: "Great to hear about your idea. The key question is: have you launched yet? Most founders spend too much time building and not enough time getting real users. Launch something simple and start learning from actual customers.",
          references: [
            {
              text: "I explain why launching early is critical in this video",
              url: "https://www.youtube.com/watch?v=1hHMwLxN6EM",
              timestamp: "2:15"
            }
          ]
        },
        "dalton-caldwell": {
          text: "Interesting approach. When evaluating product-market fit, I recommend focusing on retention metrics over acquisition. A simple but effective framework is to measure what percentage of users return week after week.",
          references: [
            {
              text: "I detail this measurement framework here",
              url: "https://www.youtube.com/watch?v=TtjoH2Utlog",
              timestamp: "7:42"
            }
          ]
        },
        "jared-friedman": {
          text: "That's a fascinating technical challenge. For AI applications, I usually recommend starting with a very narrow use case where you can deliver exceptional results, rather than trying to solve too many problems at once.",
          references: [
            {
              text: "I covered AI startup strategies in this talk",
              url: "https://www.youtube.com/watch?v=P0TvXXQGpwA",
              timestamp: "12:37"
            }
          ]
        },
        "adora-cheung": {
          text: "For marketplace businesses, focus obsessively on liquidity in a very small market first. It's better to have 100 happy users in one city than 1000 lukewarm users spread across the country.",
          references: [
            {
              text: "I discuss marketplace liquidity strategies here",
              url: "https://www.youtube.com/watch?v=yP176MBG9Tk",
              timestamp: "4:19"
            }
          ]
        }
      };
      
      const partnerResponse = mockResponses[partner.id] || {
        text: "That's interesting. Let me share some thoughts on that approach based on what I've seen with successful startups."
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

  return (
    <div className="flex flex-col h-[calc(100vh-240px)] min-h-[500px]">
      <div className="bg-white shadow-sm rounded-lg p-4 mb-4 flex items-center">
        <img 
          src={partner.photo} 
          alt={partner.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="font-bold text-lg">{partner.name}</h2>
          <p className="text-sm text-gray-600">{partner.role}</p>
        </div>
      </div>
      
      <Card className="flex-1 flex flex-col p-4 mb-4 overflow-hidden">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-[#F26522] text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
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
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "600ms" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </ScrollArea>
        
        <form onSubmit={handleSubmit} className="mt-4 flex">
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 mr-2"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={!input.trim() || isLoading}
            className="bg-[#F26522] hover:bg-[#D55411]"
          >
            <Send size={18} />
          </Button>
        </form>
      </Card>
      
      <div className="text-xs text-gray-500 text-center">
        <p>This is a simulated conversation based on {partner.name}'s public content and expertise.</p>
        <p>Responses are generated for educational purposes and are not actual advice from {partner.name}.</p>
      </div>
    </div>
  );
};

export default ChatInterface;
