import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../utils/constants";

const Projects = () => {
	return (
		<div id="projects" className="w-full lg:h-screen">
			<div className="max-w-[1240px] mx-auto px-2 py-16 h-full over" data-aos="fade-right" data-aos-duration="1000">
				<p className="text-xl tracking-widest uppercase text-primary">Side Projects</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => {
						return (
							<div key={project.name} data-aos="zoom-in" data-aos-duration="1000">
								<ProjectItem
									title={project.name}
									backgroundImg={project.image}
									projectId={project.id}
									tech={project.tech}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;
