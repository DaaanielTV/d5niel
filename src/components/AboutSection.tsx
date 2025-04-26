import React from 'react';
import { Code, Server, Shield } from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "System Administration",
    description: "Experienced in Linux distributions and server management since 2018, specializing in Debian systems"
  },
  {
    icon: Code,
    title: "Development",
    description: "Web development, Python programming, and game development experience"
  },
  {
    icon: Shield,
    title: "IT Support",
    description: "Professional experience in IT support and system maintenance through internships"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Hello! I'm Daniel, a 17-year-old IT enthusiast. With extensive experience in Debian systems since 2018,
            I'm passionate about system administration, web development, and cybersecurity.
          </p>
          <p className="text-lg text-gray-600">
            I'm pursuing a career as an IT specialist, combining my technical skills with practical experience
            gained through multiple projects and system administration work.
          </p>
        </div>
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
