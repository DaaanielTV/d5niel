
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10 animate-gradient-x">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hello, I'm d5niel
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Creative Developer & Digital Craftsman
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-secondary">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
