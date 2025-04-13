import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
					<p className="uppercase text-xl tracking-widest text-primary">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-lg">
					I’m a third-year undergraduate at SLIIT University, currently pursuing a BSc (Hons) in Software Engineering.
					I have a strong passion for building impactful digital solutions and continuously strive to grow as a 
					developer and tech professional.
					</p>
					<p className="py-2 text-gray-600 text-lg">
					Im good at developing robust and scalable back-end systems, with a focus on building APIs, managing 
					databases, and integrating with front-end applications. I’m passionate about clean architecture, performance 
					optimization, and writing maintainable code. While my core strengths lie in technologies like Node.js and 
					Spring Boot, I’m always eager to explore new frameworks and languages to expand my capabilities.
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<div data-aos="fade-up" data-aos-duration="1000">
						<Image src="/assets/about.jpg" width={320} className="rounded-xl " alt="/" height={450} loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
