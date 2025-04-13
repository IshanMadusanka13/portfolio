import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const TechoneExperience = {
		companyName: "Techone Global Lanka",
		role: "Support System Administartor",
		duration: "November 2025 - Present",
		activities: [
			"Monitored and maintained internal systems and infrastructure to ensure optimal performance and uptime across various business-critical applications.",
			"Provided system-level support by managing user access, server health, and backups, while proactively identifying and resolving technical issues.",
			"Assisted in maintaining and monitoring databases to ensure data integrity, availability, and secure access across projects.",
			"Coordinated with development and project teams to ensure backend systems and environments align with ongoing project requirements and timelines.",
		],		
	};

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
						tabList={["Techone"]}
						tabPanel={[
							<Details key={"Techone"} experienceDetails={TechoneExperience} />,
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
