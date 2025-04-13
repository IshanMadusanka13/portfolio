import React from "react";

interface EducationDetailsProps {
	educationDetails: {
		institutionName: string;
		degree: string;
		duration: string;
		highlights: string[];
	};
}

const EducationDetails: React.FC<EducationDetailsProps> = ({ educationDetails }) => {
	return (
		<div data-aos="fade-up" data-aos-duration="1000">
			<div className="flex items-center gap-x-3">
				<h3>{educationDetails.degree}</h3>
				<h3 className="text-primary">@{educationDetails.institutionName}</h3>
			</div>
			<h4 className="mt-1">{educationDetails.duration}</h4>

			<ul>
				{educationDetails.highlights.map((highlight) => (
					<li key={highlight} className="mt-4 text-lg cursor-text flex items-start gap-x-3">
						<span className="scale-150">&#x2022;</span>
						{highlight}
					</li>
				))}
			</ul>
		</div>
	);
};

export default EducationDetails;
