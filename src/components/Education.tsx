import React from "react";
import EducationDetails from "./EducationalDetails";
import BasicTabs from "./Tabs";

const Education = () => {
	const sliitEducation = {
		institutionName: "SLIIT University",
		degree: "BSc (Hons) in Software Engineering",
		duration: "2022 – Present",
		highlights: [
			"Currently On the Third Year of my Degree",
		],
	};

    const schoolEducation = {
		institutionName: "Mahanama College",
		degree: "GCE Advanced Level",
		duration: "2022",
		highlights: [
			"Completed my Advanced Level at Mahanama College",
		],
	};

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
						tabList={["SLIIT", "Mahanama College"]}
						tabPanel={[
							<EducationDetails key={"SLIIT"} educationDetails={sliitEducation} />,
                            <EducationDetails key={"Mahanama College"} educationDetails={schoolEducation} />,
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Education;
