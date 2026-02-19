
import React from 'react';
import { 
  Droplets, 
  Home, 
  Trash2, 
  Sun, 
  ShieldCheck, 
  Trees, 
  Waves,
  Sparkles,
  Award,
  Clock,
  MapPin,
  Leaf
} from 'lucide-react';
import { Service, Testimonial, BlogPost, ServiceArea } from './types';

export const BRAND = {
  name: 'High Tide Power Wash',
  owner: 'Trey Zelasko',
  phone: '843-909-0227',
  email: 'Hightidepower@gmail.com',
  hours: '8:00 AM – 6:00 PM (Including Sat & Sun)',
  colors: {
    navy: '#0f172a',
    ocean: '#2563eb',
    teal: '#06b6d4'
  }
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is the difference between pressure washing and soft washing?",
    answer: "Pressure washing uses high-pressure water to blast away dirt from hard surfaces like concrete. Soft washing uses low pressure combined with specialized cleaning solutions to safely remove organic growth (algae, mold, mildew) from delicate surfaces like siding and roofs without causing damage."
  },
  {
    question: "Will soft washing damage my landscaping or plants?",
    answer: "Absolutely not. We take extreme care to pre-wet all vegetation, use eco-friendly solutions, and thoroughly rinse down all plants during and after the process to ensure your landscaping remains healthy and vibrant."
  },
  {
    question: "Do I need to be home for the service?",
    answer: "No, you do not need to be home as long as we have access to a working exterior water spigot and all windows and doors are tightly closed. We will send you photos of the completed work and can handle payment digitally."
  },
  {
    question: "How often should I have my home's exterior cleaned in South Carolina?",
    answer: "Due to our high humidity and pollen counts, we generally recommend a professional house wash once per year and a roof cleaning every 3-5 years to prevent permanent damage and maintain curb appeal."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, High Tide Power Wash is a fully registered SC business and carries comprehensive liability insurance to protect both our team and your property. Peace of mind is part of the premium service we provide."
  },
  {
    question: "How do you determine your pricing?",
    answer: "Pricing is based on the square footage of the surfaces being cleaned, the level of organic growth present, and the specific equipment/solutions required. We provide free, transparent estimates with no hidden fees."
  }
];

export const SERVICES: Service[] = [
  {
    id: 'house-wash',
    title: 'House Washing',
    description: 'Safe soft wash technology for vinyl, brick, and stucco.',
    longDescription: 'Our low-pressure soft wash method removes algae, mold, and mildew without damaging your siding. We protect your home\'s structural integrity while restoring its curb appeal.',
    icon: <Home className="w-6 h-6" />,
    image: '/assets/house_wash.png'
  },
  {
    id: 'roof-clean',
    title: 'Roof Cleaning',
    description: 'Gentle cleaning to extend the life of your shingles.',
    longDescription: 'Gloeocapsa Magma (the black streaks on your roof) feeds on your shingles. Our specialized treatment kills the organisms at the root, extending roof life by up to 10 years.',
    icon: <Droplets className="w-6 h-6" />,
    image: '/assets/roof_cleaning.png'
  },
  {
    id: 'concrete-driveway',
    title: 'Driveway & Walkways',
    description: 'High-pressure surface cleaning for a bright, fresh finish.',
    longDescription: 'We use professional-grade surface cleaners to eliminate "zebra stripes" and deep-clean concrete, pavers, and stone walkways, removing years of oil and rust stains.',
    icon: <Sparkles className="w-6 h-6" />,
    image: '/assets/driveway.png'
  },
  {
    id: 'gutter-clean',
    title: 'Gutter Cleaning',
    description: 'Complete debris removal and functional testing.',
    longDescription: 'Clogged gutters lead to foundation issues and wood rot. We clear all debris and ensure downspouts are flowing freely to protect your investment.',
    icon: <Trash2 className="w-6 h-6" />,
    image: '/assets/gutter_cleaning.png'
  },
  {
    id: 'fence-deck',
    title: 'Deck & Fence Restoration',
    description: 'Wood and vinyl cleaning to restore original beauty.',
    longDescription: 'Whether it is weathered wood or stained vinyl, our cleaning process removes oxidation and organic growth, preparing wood for staining or simply brightening its appearance.',
    icon: <Trees className="w-6 h-6" />,
    image: '/assets/fence_deck.png'
  },
  {
    id: 'pool-deck',
    title: 'Pool Decks & Patios',
    description: 'Sanitizing your outdoor living spaces.',
    longDescription: 'Outdoor entertaining areas harbor bacteria and slippery algae. We deep clean these surfaces to make them safe, sanitary, and ready for your next gathering.',
    icon: <Waves className="w-6 h-6" />,
    image: '/assets/pool_deck.png'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { city: 'Walterboro', isPrimary: true, description: 'The hub of our operations, serving the "Front Porch of the Lowcountry" with pride.' },
  { city: 'Summerville', isPrimary: true, description: 'Premium exterior cleaning for the historic and modern homes of Flower Town.' },
  { city: 'Beaufort', isPrimary: true, description: 'Coastal-specific cleaning solutions to combat salt air and high humidity.' },
  { city: 'Orangeburg', isPrimary: true, description: 'Quality soft washing for residential and commercial properties.' },
  { city: 'Ehrhardt', isPrimary: false, description: 'Reliable service for the homes of Ehrhardt.' },
  { city: 'Islandton', isPrimary: false, description: 'Keeping Islandton properties pristine year-round.' },
  { city: 'Yemassee', isPrimary: false, description: 'Expert exterior maintenance for Yemassee residents.' },
  { city: 'Hampton', isPrimary: false, description: 'Professional pressure washing solutions in Hampton.' },
  { city: 'Fairfax', isPrimary: false, description: 'Quality cleaning services delivered to Fairfax.' },
  { city: 'Branchville', isPrimary: false, description: 'Dedicated service for the Branchville community.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Michael R.",
    location: "Summerville, SC",
    content: "Trey was professional from start to finish. Our roof had terrible black streaks, and now it looks brand new. The soft wash method he used gave us total peace of mind.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah L.",
    location: "Beaufort, SC",
    content: "Excellent service! They cleaned our pool deck and siding. The difference is night and day. Highly recommend High Tide for anyone wanting a premium job.",
    rating: 5
  },
  {
    id: 3,
    name: "James W.",
    location: "Walterboro, SC",
    content: "Fast, reliable, and reasonably priced for the quality. Trey really cares about the details. Our driveway looks better than it did when we moved in!",
    rating: 5
  },
  {
    id: 4,
    name: "Amanda K.",
    location: "Summerville, SC",
    content: "Best pressure washing company in the area. They were careful with my garden and the house looks amazing. Five stars all the way!",
    rating: 5
  },
  {
    id: 5,
    name: "Robert P.",
    location: "Orangeburg, SC",
    content: "High Tide did a great job on our commercial storefront. Removed years of grime in just a few hours. Will be using them for all our properties.",
    rating: 5
  },
  {
    id: 6,
    name: "Linda M.",
    location: "Beaufort, SC",
    content: "So happy with the results! The house wash really brightened up our home. Trey is very polite and hard-working.",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'sc-cleaning-frequency',
    title: 'How Often Should You Pressure Wash Your Home in South Carolina?',
    excerpt: 'Living in the Lowcountry means humidity and pollen. Learn why an annual clean is vital.',
    content: 'Full content here...',
    date: 'Oct 12, 2023',
    image: '/assets/blog_frequency.png'
  },
  {
    id: 'soft-vs-pressure',
    title: 'Soft Washing vs Pressure Washing: What’s the Difference?',
    excerpt: 'Not every surface can handle high pressure. We break down the science of safe cleaning.',
    content: 'Full content here...',
    date: 'Nov 5, 2023',
    image: '/assets/blog_soft_vs_pressure.png'
  },
  {
    id: 'roof-cleaning-benefits',
    title: 'Why Roof Cleaning Extends Shingle Life',
    excerpt: 'Those black streaks are more than just ugly—they are eating your roof.',
    content: 'Full content here...',
    date: 'Dec 1, 2023',
    image: '/assets/blog_roof_benefits.png'
  }
];

export const TRUST_BADGES = [
  { icon: <ShieldCheck className="w-8 h-8" />, label: 'Licensed & Insured' },
  { icon: <Droplets className="w-8 h-8" />, label: 'Safe Soft Wash' },
  { icon: <Leaf className="w-8 h-8" />, label: 'Eco-Friendly' },
  { icon: <Clock className="w-8 h-8" />, label: 'Weekend Availability' },
  { icon: <MapPin className="w-8 h-8" />, label: 'Locally Owned' },
  { icon: <Award className="w-8 h-8" />, label: 'Guaranteed' }
];