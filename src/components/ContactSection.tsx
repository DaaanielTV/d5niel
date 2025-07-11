import React from 'react';
import { Mail, Github, Twitter, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Input type="text" placeholder="Subject" required />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              <div className="space-y-4">
                <a href="https://discord.gg/aKTcK7H4FY" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center p-3 hover:bg-primary/10 rounded-lg transition-colors">
                  <Headset className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-semibold">Discord Server</p>
                    <p className="text-sm text-gray-600">Join our community</p>
                  </div>
                </a>
                
                <a href="https://twitter.com/your_handle" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center p-3 hover:bg-primary/10 rounded-lg transition-colors">
                  <Twitter className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-semibold">Twitter</p>
                    <p className="text-sm text-gray-600">Follow for updates</p>
                  </div>
                </a>

                <a href="mailto:your.email@example.com"
                   className="flex items-center p-3 hover:bg-primary/10 rounded-lg transition-colors">
                  <Mail className="h-6 w-6 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-600">Direct contact</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
