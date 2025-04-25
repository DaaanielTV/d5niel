
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <Button size="lg" className="bg-primary hover:bg-secondary mb-8">
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </Button>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
