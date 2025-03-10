
export interface PartnerData {
  id: string;
  name: string;
  role: string;
  photo: string;
  expertise: string[];
  description: string;
  notableStartups: string[];
  communicationStyle: string;
  background: string;
}

const partners: PartnerData[] = [
  {
    id: "garry-tan",
    name: "Garry Tan",
    role: "President and CEO of Y Combinator",
    photo: "https://i.imgur.com/JbXbVxA.jpg",
    expertise: ["Consumer Products", "Product Design", "Scaling", "Company Building"],
    description: "Former co-founder of Posterous and design lead at Palantir. Known for product design expertise and founder mentality insights.",
    notableStartups: ["Coinbase", "Instacart", "Stripe", "Posterous"],
    communicationStyle: "Visual and metaphorical, with an emphasis on design thinking and founder psychology.",
    background: "Garry Tan is the President and CEO of Y Combinator. He was previously a co-founder of Posterous and a designer at Palantir Technologies. As an early stage investor, he funded companies like Coinbase, Instacart, and Stripe."
  },
  {
    id: "michael-seibel",
    name: "Michael Seibel",
    role: "Managing Director, Group Partner at Y Combinator",
    photo: "https://i.imgur.com/aY5zKZr.jpg",
    expertise: ["Growth Strategy", "Fundraising", "Founder Pitfalls", "Startup Fundamentals"],
    description: "Co-founder of Twitch (Justin.tv) and Socialcam. Known for direct, practical advice on startup fundamentals and fundraising.",
    notableStartups: ["Twitch", "Socialcam", "Reddit", "Airbnb"],
    communicationStyle: "Direct and practical, focusing on fundamentals with occasional blunt feedback.",
    background: "Michael Seibel is a Group Partner and Managing Director at Y Combinator. He was CEO of Justin.tv and co-founder of Socialcam. Justin.tv later became Twitch Interactive and sold to Amazon for $970M."
  },
  {
    id: "dalton-caldwell",
    name: "Dalton Caldwell",
    role: "Managing Director, Group Partner at Y Combinator",
    photo: "https://i.imgur.com/8S5RjGf.jpg",
    expertise: ["Product-Market Fit", "Technical Development", "Measuring Progress", "B2B Strategy"],
    description: "Founder of imeem and App.net. Technical and methodical, with focus on defining and measuring product-market fit.",
    notableStartups: ["imeem", "App.net", "Mixpanel", "Gumroad"],
    communicationStyle: "Technical and methodical, with data-driven explanations and framework-oriented advice.",
    background: "Dalton Caldwell is a Managing Director and Group Partner at Y Combinator. He previously founded imeem (acquired by MySpace) and App.net. He has a technical background and focuses on product-market fit measurement."
  },
  {
    id: "jared-friedman",
    name: "Jared Friedman",
    role: "Group Partner at Y Combinator",
    photo: "https://i.imgur.com/jBtQjq7.jpg",
    expertise: ["Technical Founding", "AI/ML Applications", "Healthcare Startups", "Hard Tech"],
    description: "Co-founder and CTO of Scribd. Specializes in AI, biotech, and technically complex startups.",
    notableStartups: ["Scribd", "Atomwise", "Embark Veterinary"],
    communicationStyle: "Deeply technical with analytical breakdowns of complex problems and market opportunities.",
    background: "Jared Friedman is a Group Partner at Y Combinator. He was previously co-founder and CTO of Scribd. He focuses on hard tech companies, especially those in biotech, healthcare, and AI/ML applications."
  },
  {
    id: "adora-cheung",
    name: "Adora Cheung",
    role: "Group Partner at Y Combinator",
    photo: "https://i.imgur.com/lHtBlNm.jpg",
    expertise: ["Marketplace Businesses", "Growth Strategy", "Consumer Products", "Team Building"],
    description: "Co-founder and CEO of Homejoy. Expert in marketplace businesses and consumer growth strategies.",
    notableStartups: ["Homejoy", "Opendoor", "Brex"],
    communicationStyle: "Practical and strategic, focuses on operational excellence and growth mechanisms.",
    background: "Adora Cheung is a Group Partner at Y Combinator. She was previously co-founder and CEO of Homejoy. She specializes in marketplace businesses and consumer growth strategies."
  }
];

// Function to get recommended partners based on business type
export const getRecommendedPartners = (businessType: string): PartnerData[] => {
  switch(businessType) {
    case "consumer":
      return partners.filter(p => 
        p.id === "garry-tan" || p.id === "adora-cheung" || p.id === "michael-seibel"
      ).slice(0, 3);
    case "b2b":
      return partners.filter(p => 
        p.id === "michael-seibel" || p.id === "dalton-caldwell"
      );
    case "hardware":
      return partners.filter(p => 
        p.id === "jared-friedman" || p.id === "dalton-caldwell"
      );
    case "ai":
      return partners.filter(p => 
        p.id === "jared-friedman" || p.id === "garry-tan"
      );
    default:
      return partners.slice(0, 3);
  }
};

// Function to get a partner by ID
export const getPartnerById = (id: string): PartnerData | undefined => {
  return partners.find(p => p.id === id);
};

export default partners;
