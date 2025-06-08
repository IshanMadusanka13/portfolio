import React from "react";
import EducationDetails from "./EducationalDetails";
import BasicTabs from "./Tabs";
import { education } from "../utils/constants";

const Education = () => {
	return (
		<div id="education" className="w-full lg:h-screen p-2">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Education</p>
				<h2 className="py-4">Where I&apos;ve Studied</h2>
				<div className="mt-2">
					<BasicTabs
						tabList={education.map(edu => edu.key)}
						tabPanel={education.map(edu => (
							<EducationDetails 
								key={edu.key} 
								educationDetails={edu} 
							/>
						))}
					/>
				</div>
			</div>
		</div>
	);
};

export default Education;
