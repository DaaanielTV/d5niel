
import React from 'react';
import { Calendar } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development",
    date: "2024-04-20",
    readTime: "5 min read"
  },
  {
    title: "Designing for Accessibility",
    excerpt: "Best practices for creating inclusive digital experiences",
    date: "2024-04-15",
    readTime: "4 min read"
  },
  {
    title: "Modern State Management",
    excerpt: "A deep dive into current state management solutions",
    date: "2024-04-10",
    readTime: "6 min read"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="p-6 rounded-lg border border-gray-100 group-hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
