
import React from 'react';
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Project Two",
    description: "Mobile-first design with responsive layouts",
    tags: ["Design", "Mobile", "UI/UX"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Project Three",
    description: "Full-stack application with modern architecture",
    tags: ["Full-stack", "Node.js", "API"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
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
