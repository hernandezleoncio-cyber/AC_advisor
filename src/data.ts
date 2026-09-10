import { asset } from "./lib/assets";

export const brand = {
  name: "AC Advisory",
  line: "FOOD. RETAIL. CONNECTIONS.",
  promise:
    "Helping manufacturers, growers and emerging food brands connect with the retailers that can help them grow.",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/manufacturers", label: "Manufacturers" },
  { to: "/retailers", label: "Retailers" },
  { to: "/expertise", label: "Our Expertise" },
  { to: "/why-us", label: "Why Us" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const problems = [
  "Finding the right buyer",
  "Knowing which retailers are the right fit",
  "Getting the buyer’s attention",
  "Understanding retailer expectations",
  "Building the right retail proposition",
  "Pricing and positioning",
  "Navigating item setup",
  "Managing the business after the sale",
];

export const steps = [
  {
    numeral: "01",
    title: "Discover",
    copy: "We learn your product, capabilities, goals and ideal customer.",
  },
  {
    numeral: "02",
    title: "Position",
    copy: "We determine where your product fits—and how it should be presented.",
  },
  {
    numeral: "03",
    title: "Connect",
    copy: "We identify the right retailers and buying teams.",
  },
  {
    numeral: "04",
    title: "Present",
    copy: "We develop and deliver a compelling retail proposition.",
  },
  {
    numeral: "05",
    title: "Develop",
    copy: "We work through costs, logistics, packaging, supply and retailer requirements.",
  },
  {
    numeral: "06",
    title: "Grow",
    copy: "We stay involved to help develop the business beyond the initial placement.",
  },
];

export const differentiators = [
  {
    title: "Retail Experience",
    copy: "We understand the buyer’s priorities.",
  },
  {
    title: "Retail Relationships",
    copy: "We know who to approach and how to approach them.",
  },
  {
    title: "Commercial Experience",
    copy: "We understand what it takes to build a sustainable retail business.",
  },
];

export const categories = [
  { title: "Fresh & Perishable", image: asset("images/produce.jpg") },
  { title: "Prepared Foods", image: asset("images/dining.jpg") },
  { title: "Deli", image: asset("images/cheese.jpg") },
  { title: "Meat & Protein", image: asset("images/meat.jpg") },
  { title: "Seafood", image: asset("images/fish.jpg") },
  { title: "Produce", image: asset("images/market.jpg") },
  { title: "Frozen", image: asset("images/frozen.jpg") },
  { title: "Private Brand", image: asset("images/olive.jpg") },
];

export const expertiseAreas = [
  "Retail Strategy",
  "Product Development",
  "Private Brand",
  "Fresh & Perishable",
  "Buyer Development",
  "Commercialization",
  "Retail Execution",
  "Supplier Development",
];

export const manufacturerServices = [
  {
    title: "Retail Strategy",
    copy: "Identify the right channels, retailers and opportunities.",
  },
  {
    title: "Buyer Development",
    copy: "Connect your products with the right retail decision-makers.",
  },
  {
    title: "Product Positioning",
    copy: "Translate your product’s strengths into a compelling retail proposition.",
  },
  {
    title: "Cost & Pricing Strategy",
    copy: "Help evaluate costs, margins, competitive positioning and retailer economics.",
  },
  {
    title: "Retail Presentations",
    copy: "Develop buyer-ready presentations and selling stories.",
  },
  {
    title: "New Item Development",
    copy: "Support item setup, packaging, specifications and commercialization.",
  },
  {
    title: "Account Development",
    copy: "Stay engaged after placement to develop and expand the business.",
  },
  {
    title: "Retail Execution",
    copy: "Help monitor the business and identify opportunities for growth.",
  },
];

export const retailerExpect = [
  {
    title: "Relevant Products",
    copy: "We focus on products that have a reason to exist—not simply another SKU.",
  },
  {
    title: "Qualified Suppliers",
    copy: "We work to understand supplier capabilities, capacity and readiness.",
  },
  {
    title: "Category Understanding",
    copy: "We bring a retailer’s perspective to product evaluation.",
  },
  {
    title: "Efficient Connections",
    copy: "We respect buyers’ time and work to bring forward opportunities that fit.",
  },
  {
    title: "Innovation",
    copy: "We actively look for emerging products, new concepts and differentiated suppliers.",
  },
];

export const whyPoints = [
  {
    numeral: "1",
    title: "Retailer Perspective",
    copy: "We understand the pressures, priorities and decision-making process behind the retail buying organization.",
  },
  {
    numeral: "2",
    title: "Real Relationships",
    copy: "Relationships matter in this business. We focus on building meaningful connections—not simply distributing emails.",
  },
  {
    numeral: "3",
    title: "Small & Nimble",
    copy: "We’re intentionally built to move quickly. No layers of bureaucracy. No passing your business from department to department.",
  },
  {
    numeral: "4",
    title: "Hands-On",
    copy: "We work alongside our partners. Product. Cost. Presentation. Buyer strategy. Samples. Meetings. Follow-up.",
  },
  {
    numeral: "5",
    title: "Food First",
    copy: "We understand the operational realities behind fresh and perishable food.",
  },
  {
    numeral: "6",
    title: "Results Matter",
    copy: "The objective isn’t a buyer meeting. The objective is a successful retail business.",
  },
];

export const aboutFocus = [
  "25+ years of retail experience",
  "Major U.S. retailer experience",
  "Food merchandising",
  "Private brand",
  "Product development",
  "Supplier development",
  "Retail strategy",
];
