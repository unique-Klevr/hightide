
// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface ServiceArea {
  city: string;
  isPrimary: boolean;
  description: string;
}
