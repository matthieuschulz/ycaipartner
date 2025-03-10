export interface Theme {
  id: string;
  title: string;
  description: string;
  icon: string;
  relatedExpertise: string[];
}

// Define all available themes
export const allThemes: Theme[] = [
  {
    id: "fundraising",
    title: "Fundraising",
    description: "Pitch decks, valuation, investor relations, SAFEs, and funding strategies",
    icon: "dollar-sign",
    relatedExpertise: ["Fundraising", "Growth Strategy", "Business Models"]
  },
  {
    id: "team-building",
    title: "Team Building",
    description: "Hiring, equity, company culture, remote vs. in-person, founder relationships",
    icon: "users",
    relatedExpertise: ["Team Building", "Company Building", "Founder Pitfalls"]
  },
  {
    id: "product-development",
    title: "Product Development",
    description: "MVP strategies, feature prioritization, product-market fit, technical decisions",
    icon: "code",
    relatedExpertise: ["Product Development", "Technical Development", "Product Innovation", "Product-Market Fit"]
  },
  {
    id: "growth-marketing",
    title: "Growth & Marketing",
    description: "Customer acquisition, CAC, growth channels, content strategy, paid advertising",
    icon: "arrow-up-right",
    relatedExpertise: ["Growth Strategy", "Growth Experimentation", "Marketing Technology", "AdTech"]
  },
  {
    id: "business-model",
    title: "Business Model",
    description: "Pricing strategies, subscription models, enterprise sales, revenue diversification",
    icon: "building",
    relatedExpertise: ["Business Models", "B2B Strategy", "B2B Sales"]
  },
  {
    id: "legal-operations",
    title: "Legal & Operations",
    description: "Incorporation, IP protection, compliance, accounting, HR policies",
    icon: "file-text",
    relatedExpertise: [] // General theme - available to all partners
  },
  {
    id: "psychological-challenges",
    title: "Psychological Challenges",
    description: "Founder burnout, imposter syndrome, work-life balance, handling rejection",
    icon: "heart",
    relatedExpertise: [] // General theme - available to all partners
  },
  {
    id: "strategic-decisions",
    title: "Strategic Decisions",
    description: "Pivoting vs persisting, competition analysis, timing market entry, partnerships",
    icon: "target",
    relatedExpertise: [] // General theme - available to all partners
  },
  {
    id: "customer-development",
    title: "Customer Development",
    description: "User interviews, feedback loops, churn reduction, community building",
    icon: "user",
    relatedExpertise: ["Consumer Products", "Marketplace Businesses", "Customer Acquisition"]
  },
  {
    id: "industry-specific",
    title: "Industry-Specific Challenges",
    description: "Regulatory hurdles, supply chains, data acquisition, compliance issues",
    icon: "puzzle",
    relatedExpertise: ["Fintech", "Banking", "Healthcare Startups", "Hard Tech", "AR/VR Technology", "Regulatory Strategy"]
  }
];

// Helper function to get a theme by ID
export const getThemeById = (id: string): Theme | undefined => {
  return allThemes.find(theme => theme.id === id);
}; 