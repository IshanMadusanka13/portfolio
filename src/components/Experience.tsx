import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";
import { experience } from "../utils/constants";

const Experience = () => {
	return (
		<div id="experience" className="w-full lg:h-screen p-2 ">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I&apos;ve Worked</h2>
				<div className="mt-2 ">
					<BasicTabs
						tabList={experience.map(exp => exp.key)}
						tabPanel={experience.map(exp => (
							<Details 
								key={exp.key} 
								experienceDetails={exp} 
							/>
						))}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;