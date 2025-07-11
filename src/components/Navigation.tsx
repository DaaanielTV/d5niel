import React from 'react';
import { Twitter, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">d5niel</a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://x.com/daaaaanieltv" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://discord.gg/hMPy4B6WKW" target="_blank" rel="noopener noreferrer">
              <Headset className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};
