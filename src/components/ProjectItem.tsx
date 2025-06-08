import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ItemProps {
	title: string;
	backgroundImg: any;
	tech: string;
	projectId: string;
}

const ProjectItem = ({ title, backgroundImg, tech, projectId }: ItemProps) => {
	return (
		<div>
			<div className="relative flex items-center justify-center h-auto w-full md:scale-90 shadow-xl shadow-gray-400 rounded-xl group 
  bg-transparent transition-all duration-700 ease-in-out 
  hover:bg-gradient-to-r from-primary to-lightPrimary">
				<Image className="rounded-xl group-hover:opacity-10 transition-opacity duration-700 ease-in-out" src={backgroundImg} alt="/" loading="lazy" />
				<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
    opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
					<h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
					<p className="pb-4 pt-2 text-white text-center">{tech}</p>
					<Link href={`/projectDetail?id=${projectId}`}>
						<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer 
        hover:bg-gray-100 transition-colors duration-300 ease-in-out">
							View Details
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
