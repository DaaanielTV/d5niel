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
	}
];

const pastProjects = [
	{
		title: "DMH Network",
		description: "Former owner of DMH Network (D - Daniel, M - Matti, H - Henry). Network management and development.",
		role: "Owner",
		period: "24.01.2025 - 26.04.2025",
		status: "Now managed by Henry and Matti",
		tags: ["Network Management", "Server Administration"]
	},
	{
		title: "Emergency Wiesbaden",
		description: "A Roblox roleplay game focused on emergency services simulation.",
		role: "Lead Developer",
		period: "15.10.2024 - 17.11.2024",
		status: "Development discontinued",
		tags: ["Roblox", "Game Development", "Lua"]
	}
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

				{/* Active Projects */}
				<div className="grid md:grid-cols-2 gap-8 mb-16">
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
							</div>
						</div>
					))}
				</div>

				{/* Past Projects */}
				<h3 className="text-3xl font-bold text-center mb-8">Past Involvements</h3>
				<div className="grid md:grid-cols-2 gap-8">
					{pastProjects.map((project) => (
						<div key={project.title} className="p-6 rounded-lg border border-gray-200 hover:border-gray-300">
							<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-600 mb-4">{project.description}</p>
							<div className="mb-4">
								<p className="text-sm text-gray-500">Role: {project.role}</p>
								<p className="text-sm text-gray-500">Period: {project.period}</p>
								<p className="text-sm text-gray-500 italic">{project.status}</p>
							</div>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tags.map((tag) => (
									<span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
