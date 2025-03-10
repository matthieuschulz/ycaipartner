
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
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/aY5zKZr.jpg",
    expertise: ["Growth Strategy", "Fundraising", "Founder Pitfalls", "Startup Fundamentals"],
    description: "Co-founder of Twitch (Justin.tv) and Socialcam. Known for direct, practical advice on startup fundamentals and fundraising.",
    notableStartups: ["Twitch", "Socialcam", "Reddit", "Airbnb"],
    communicationStyle: "Direct and practical, focusing on fundamentals with occasional blunt feedback.",
    background: "Michael Seibel is a General Partner at Y Combinator. He was CEO of Justin.tv and co-founder of Socialcam. Justin.tv later became Twitch Interactive and sold to Amazon for $970M."
  },
  {
    id: "dalton-caldwell",
    name: "Dalton Caldwell",
    role: "Managing Partner at Y Combinator",
    photo: "https://i.imgur.com/8S5RjGf.jpg",
    expertise: ["Product-Market Fit", "Technical Development", "Measuring Progress", "B2B Strategy"],
    description: "Founder of imeem and App.net. Technical and methodical, with focus on defining and measuring product-market fit.",
    notableStartups: ["imeem", "App.net", "Mixpanel", "Gumroad"],
    communicationStyle: "Technical and methodical, with data-driven explanations and framework-oriented advice.",
    background: "Dalton Caldwell is a Managing Partner at Y Combinator. He previously founded imeem (acquired by MySpace) and App.net. He has a technical background and focuses on product-market fit measurement."
  },
  {
    id: "jared-friedman",
    name: "Jared Friedman",
    role: "Managing Partner at Y Combinator",
    photo: "https://i.imgur.com/jBtQjq7.jpg",
    expertise: ["Technical Founding", "AI/ML Applications", "Healthcare Startups", "Hard Tech"],
    description: "Co-founder and CTO of Scribd. Specializes in AI, biotech, and technically complex startups.",
    notableStartups: ["Scribd", "Atomwise", "Embark Veterinary"],
    communicationStyle: "Deeply technical with analytical breakdowns of complex problems and market opportunities.",
    background: "Jared Friedman is a Managing Partner at Y Combinator. He was previously co-founder and CTO of Scribd. He focuses on hard tech companies, especially those in biotech, healthcare, and AI/ML applications."
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
  },
  {
    id: "gustaf-alstromer",
    name: "Gustaf Alströmer",
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/vPqvLO1.jpg",
    expertise: ["Growth Strategy", "Product Development", "Marketplaces", "Consumer Products"],
    description: "Product lead on Airbnb's Growth team and former CEO of Heysan (YC W07).",
    notableStartups: ["Airbnb", "Heysan"],
    communicationStyle: "Data-driven with a focus on growth experimentation and product metrics.",
    background: "Gustaf Alströmer is a General Partner at YC. He spent 4.5 years at Airbnb where he worked as a Product Lead on the Growth team, a team he helped start in 2012."
  },
  {
    id: "tom-blomfield",
    name: "Tom Blomfield",
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/w4xLyXA.jpg",
    expertise: ["Fintech", "Banking", "Consumer Products", "Regulatory Strategy"],
    description: "Co-founder of Monzo, one of the first app-based challenger banks in the UK, and GoCardless (YC S11).",
    notableStartups: ["Monzo", "GoCardless"],
    communicationStyle: "Clear and concise, with practical insights on scaling regulated businesses.",
    background: "Tom Blomfield is a General Partner at YC. He was co-founder of Monzo, which counts 10% of the UK population as customers. Previously, he founded GoCardless (YC S11)."
  },
  {
    id: "paul-buchheit",
    name: "Paul Buchheit",
    role: "Partner Emeritus at Y Combinator",
    photo: "https://i.imgur.com/MYmkMbP.jpg",
    expertise: ["Product Innovation", "Software Development", "Startup Philosophy", "Product-Market Fit"],
    description: "Creator of Gmail and Google's 'Don't be evil' slogan. Co-founder of FriendFeed (acquired by Facebook).",
    notableStartups: ["Gmail", "FriendFeed", "AdSense"],
    communicationStyle: "Philosophical and first-principles thinking about product development and innovation.",
    background: "Paul Buchheit is a Partner Emeritus at YC and the creator of GMail. While at Google he also built the prototype for AdSense and came up with Google's famous slogan 'Don't be evil.'"
  },
  {
    id: "nicolas-dessaigne",
    name: "Nicolas Dessaigne",
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/uK2G9l8.jpg",
    expertise: ["Developer Tools", "Search Technology", "B2B SaaS", "Company Scaling"],
    description: "Co-founder of Algolia (YC W14), a Search API used by millions of developers.",
    notableStartups: ["Algolia"],
    communicationStyle: "Technical and detailed, with focus on developer experience and B2B go-to-market.",
    background: "Nicolas Dessaigne is a General Partner at YC. He was the co-founder of Algolia (YC W14), and led the company as CEO up to 350 people before hiring a successor in 2020."
  },
  {
    id: "aaron-epstein",
    name: "Aaron Epstein",
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/gQ3T5UQ.jpg",
    expertise: ["Marketplaces", "Design", "Creator Economy", "Business Models"],
    description: "Co-founder of Creative Market (YC W10), a marketplace for graphic design assets.",
    notableStartups: ["Creative Market"],
    communicationStyle: "Design-focused with attention to business model mechanics and creator incentives.",
    background: "Aaron Epstein is a General Partner at YC. He was co-founder of Creative Market (YC W10), which he sold to Autodesk in 2014 and spun out as an independent startup again in 2017."
  },
  {
    id: "brad-flora",
    name: "Brad Flora",
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/PmLYF5Z.jpg",
    expertise: ["AdTech", "B2B Sales", "Marketing Technology", "Acquisitions"],
    description: "Co-founder and CEO of Perfect Audience, an ad network funded by Y Combinator in 2011.",
    notableStartups: ["Perfect Audience"],
    communicationStyle: "Strategic and sales-oriented with focus on business development and customer acquisition.",
    background: "Brad Flora is a General Partner at YC. He was co-founder and CEO of Perfect Audience, acquired by Marin Software in 2014 and used by companies like Eventbrite, Atlassian, and New Relic."
  },
  {
    id: "diana-hu",
    name: "Diana Hu",
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/RjLVEfN.jpg",
    expertise: ["AR/VR Technology", "Computer Vision", "Machine Learning", "Deep Tech"],
    description: "Co-founder and CTO of Escher Reality (YC S17), an Augmented Reality Backend company acquired by Niantic.",
    notableStartups: ["Escher Reality"],
    communicationStyle: "Technical and systems-oriented, with deep knowledge of AR/VR and machine learning.",
    background: "Diana Hu is a General Partner at YC. She was co-founder and CTO of Escher Reality (YC S17), an Augmented Reality Backend company that was acquired by Niantic (makers of Pokémon Go)."
  },
  {
    id: "pete-koomen",
    name: "Pete Koomen",
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/DQ8cVlF.jpg",
    expertise: ["Growth Experimentation", "A/B Testing", "Product Development", "B2B SaaS"],
    description: "Co-founder of Optimizely (W10) which helps companies run experiments on their websites and apps.",
    notableStartups: ["Optimizely"],
    communicationStyle: "Data-oriented with emphasis on experimentation and iterative product development.",
    background: "Pete Koomen is a General Partner at YC. He co-founded Optimizely (W10) which helps companies run experiments on their websites and apps. He helped Optimizely grow from inception, to $100M+ in ARR."
  },
  {
    id: "david-lieb",
    name: "David Lieb",
    role: "General Partner at Y Combinator",
    photo: "https://i.imgur.com/UOnZEsV.jpg",
    expertise: ["Mobile Apps", "Consumer Products", "Product Development", "AI Applications"],
    description: "Co-founder and CEO of Bump (S09), a mobile app used by more than 150M people. Later worked at Google Photos.",
    notableStartups: ["Bump", "Google Photos"],
    communicationStyle: "Product-focused with insights on mobile user experience and mainstream consumer adoption.",
    background: "David Lieb is a General Partner at YC. He was previously the co-founder and CEO of Bump (S09), a mobile app used by more than 150M people to share photos and contact info by bumping their phones together."
  },
  {
    id: "harj-taggar",
    name: "Harj Taggar",
    role: "Managing Partner at Y Combinator",
    photo: "https://i.imgur.com/nIB9wtZ.jpg",
    expertise: ["Technical Hiring", "Recruiting", "Talent Assessment", "Early-stage Growth"],
    description: "Founder and CEO of Triplebyte (YC S15) and Auctomatic (YC W07). Original YC partner from 2010.",
    notableStartups: ["Triplebyte", "Auctomatic"],
    communicationStyle: "Reflective and incisive, with clear perspective on talent-building and technical assessment.",
    background: "Harj Taggar is a Managing Partner at YC. He was previously founder and CEO of Triplebyte (YC S15) and Auctomatic (YC W07), which was acquired by Live Current Media in 2008."
  },
  {
    id: "tyler-bosmeny",
    name: "Tyler Bosmeny",
    role: "Visiting Partner at Y Combinator",
    photo: "https://i.imgur.com/1zb0QdW.jpg",
    expertise: ["EdTech", "Sales Strategy", "Fundraising", "Growth"],
    description: "Co-founder and CEO of Clever (S12), used by 60% of US students to access learning software.",
    notableStartups: ["Clever"],
    communicationStyle: "Sales-oriented with practical advice on go-to-market strategies and fundraising.",
    background: "Tyler Bosmeny was the co-founder and CEO of Clever (S12), which lets students and teachers access all of their learning software in one place. In 2021, Clever was acquired for $500M."
  },
  {
    id: "andrew-miklas",
    name: "Andrew Miklas",
    role: "Visiting Partner at Y Combinator",
    photo: "https://i.imgur.com/2L5xjVB.jpg",
    expertise: ["Developer Tools", "Infrastructure", "B2B SaaS", "Technical Architecture"],
    description: "Co-founder and former CTO of PagerDuty (S10, NYSE:PD), a digital operations platform.",
    notableStartups: ["PagerDuty", "CaptivateIQ", "Retool"],
    communicationStyle: "Technical and architectural, with focus on scaling high-availability systems.",
    background: "Andrew Miklas is the co-founder and former CTO of PagerDuty (S10, NYSE:PD). As PagerDuty's founding CTO, he scaled the product & engineering team to 70+ individuals."
  },
  {
    id: "jon-xu",
    name: "Jon Xu",
    role: "Visiting Partner at Y Combinator",
    photo: "https://i.imgur.com/asDG0MI.jpg",
    expertise: ["FinTech", "WealthTech", "Product Development", "Enterprise Integration"],
    description: "Co-founder and former CTO of FutureAdvisor (S10), one of the first robo investment advisors.",
    notableStartups: ["FutureAdvisor"],
    communicationStyle: "Technical with a focus on product-market fit in regulated industries.",
    background: "Jon Xu is the co-founder and former CTO of FutureAdvisor (S10), one of the first robo investment advisors that made high-quality investment management available to everyone. FutureAdvisor was acquired by BlackRock in 2015."
  }
];

// Expanded business categories
export const getRecommendedPartners = (businessType: string): PartnerData[] => {
  switch(businessType) {
    case "consumer":
      return partners.filter(p => 
        p.id === "garry-tan" || p.id === "adora-cheung" || p.id === "michael-seibel" || p.id === "david-lieb" || p.id === "gustaf-alstromer"
      ).slice(0, 4);
    case "b2b":
      return partners.filter(p => 
        p.id === "michael-seibel" || p.id === "dalton-caldwell" || p.id === "nicolas-dessaigne" || p.id === "pete-koomen" || p.id === "brad-flora"
      ).slice(0, 4);
    case "hardware":
      return partners.filter(p => 
        p.id === "jared-friedman" || p.id === "dalton-caldwell" || p.id === "andrew-miklas" || p.id === "diana-hu"
      ).slice(0, 4);
    case "ai":
      return partners.filter(p => 
        p.id === "jared-friedman" || p.id === "garry-tan" || p.id === "diana-hu" || p.id === "paul-buchheit"
      ).slice(0, 4);
    case "fintech":
      return partners.filter(p => 
        p.id === "tom-blomfield" || p.id === "jon-xu" || p.id === "harj-taggar" 
      ).slice(0, 4);
    case "marketplace":
      return partners.filter(p => 
        p.id === "adora-cheung" || p.id === "aaron-epstein" || p.id === "gustaf-alstromer"
      ).slice(0, 4);
    case "edtech":
      return partners.filter(p => 
        p.id === "tyler-bosmeny" || p.id === "nicolas-dessaigne" || p.id === "michael-seibel"
      ).slice(0, 4);
    case "devtools":
      return partners.filter(p => 
        p.id === "andrew-miklas" || p.id === "nicolas-dessaigne" || p.id === "paul-buchheit" || p.id === "harj-taggar"
      ).slice(0, 4);
    default:
      return partners.slice(0, 4);
  }
};

// Function to get a partner by ID
export const getPartnerById = (id: string): PartnerData | undefined => {
  return partners.find(p => p.id === id);
};

export default partners;
