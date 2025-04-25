
import React from 'react';
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">d5niel</a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="hidden md:flex gap-4">
          <a href="https://github.com/DaaanielTV" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-gray-600 hover:text-primary transition-colors" />
          </a>
          <a href="https://de.linkedin.com/in/daniel-rosemann-28751a264" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-gray-600 hover:text-primary transition-colors" />
          </a>
          <a href="mailto:daniel.rosemann10@gmail.com">
            <Mail className="h-5 w-5 text-gray-600 hover:text-primary transition-colors" />
          </a>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};
