
import React from 'react';
import { Code, Brush, Globe } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Development",
    description: "Crafting clean, efficient code and building responsive web applications"
  },
  {
    icon: Brush,
    title: "Design",
    description: "Creating intuitive user interfaces and engaging user experiences"
  },
  {
    icon: Globe,
    title: "Strategy",
    description: "Developing digital strategies and technical solutions"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.title} className="p-6 rounded-lg border border-gray-100 hover:border-primary transition-colors">
              <skill.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
