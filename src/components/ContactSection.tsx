import React from 'react';
import { Headset, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Connect with me</h3>
              <div className="flex flex-col items-center space-y-8">
                <a href="https://discord.gg/hMPy4B6WKW" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center space-y-2">
                  <Headset className="h-10 w-10 mb-2" />
                  <p className="font-semibold">Discord Server</p>
                  <p className="text-sm text-gray-600">Join our community</p>
                </a>
                <a href="https://x.com/daaaaanieltv" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center space-y-2">
                  <Twitter className="h-10 w-10 mb-2" />
                  <p className="font-semibold">Twitter</p>
                  <p className="text-sm text-gray-600">Follow for updates</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
