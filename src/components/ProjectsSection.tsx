
import React from 'react';
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ShadowUnity",
    description: "A German Minecraft server founded in April 2018, growing to over 2000 registered users",
    tags: ["Minecraft", "Server Administration", "Community Management"],
    image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025"
  },
  {
    title: "Emergency Response: Crestwood County",
    description: "A Roblox game in development since September 2023, focusing on emergency response scenarios",
    tags: ["Roblox", "Game Development", "In Development"],
    image: "https://images.unsplash.com/photo-1563089145-599997674d42"
  },
  {
    title: "DMH Network",
    description: "A collaborative Minecraft network project founded with partners from HMT network",
    tags: ["Minecraft", "Networking", "Collaboration"],
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-full">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
