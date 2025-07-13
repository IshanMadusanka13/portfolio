import ReactImg from "public/assets/skills/react.png";
import NextImg from "public/assets/skills/nextjs.png";
import ViteImg from "public/assets/skills/vite.png";
import SpringBoot from "public/assets/skills/springboot.png";
import Javascript from "public/assets/skills/javascript.png";
import Typescript from "public/assets/skills/typescript.png";
import Node from "public/assets/skills/node.png";
import Git from "public/assets/skills/git.png";
import Java from "public/assets/skills/java.png";
import Tailwind from "public/assets/skills/tailwind.png";
import MySQL from "public/assets/skills/mysql.png";
import MongoDB from "public/assets/skills/mongodb.png";
import Docker from "public/assets/skills/docker.png";
import Kubernetes from "public/assets/skills/kubernetes.png";

import Capta from "public/assets/projects/capta.png";
import Apex from "public/assets/projects/apex.png";
import SkillSync from "public/assets/projects/skillsync.png";
import LiOC from "public/assets/projects/lioc.png";
import Sipnena from "public/assets/projects/Sipnena.png";

export const skills = [
	{
		name: "React JS",
		image: ReactImg,
	},
	{
		name: "Next JS",
		image: NextImg,
	},
	{
		name: "Vite JS",
		image: ViteImg,
	},
	{
		name: "Tailwind CSS",
		image: Tailwind,
	},
	{
		name: "Node JS",
		image: Node,
	},
	{
		name: "Spring Boot",
		image: SpringBoot,
	},
	{
		name: "Javascript",
		image: Javascript,
	},
	{
		name: "Typescript",
		image: Typescript,
	},
	{
		name: "Git",
		image: Git,
	},
	{
		name: "Java",
		image: Java,
	},
	{
		name: "MySQL",
		image: MySQL,
	},
	{
		name: "MongoDB",
		image: MongoDB,
	},
	{
		name: "Docker",
		image: Docker,
	},
	{
		name: "Kubernetes",
		image: Kubernetes,
	},
];

export const experience = [
	{
		key: "Techone",
		companyName: "Techone Global Lanka",
		role: "Support System Administartor",
		duration: "November 2023 - Present",
		activities: [
			"Monitored and maintained internal systems and infrastructure to ensure optimal performance and uptime across various business-critical applications.",
			"Provided system-level support by managing user access, server health, and backups, while proactively identifying and resolving technical issues.",
			"Assisted in maintaining and monitoring databases to ensure data integrity, availability, and secure access across projects.",
			"Coordinated with development and project teams to ensure backend systems and environments align with ongoing project requirements and timelines.",
		],
	}
];

export const education = [
	{
		key: "SLIIT",
		institutionName: "SLIIT University",
		degree: "BSc (Hons) in Software Engineering",
		duration: "2022 – Present",
		highlights: [
			"Currently following a four-year degree program with strong emphasis on software development",
			"Coursework includes: Object-Oriented Programming, Web Application Development, Software Engineering Principles, Mobile App Development and Software Architecture"
		],
	},

	{
		key: "Mahanama College",
		institutionName: "Mahanama College",
		degree: "GCE Advanced Level",
		duration: "2022",
		highlights: [
			"Completed my Advanced Level at Mahanama College",
			"Subjects: Combined Mathematics, Physics, and IT"
		],
	},
];

export const projects = [
	{
		id: "apex",
		name: "Apex Project",
		type: "Web App",
		status: "Completed",
		image: Apex,
		tech: "Next JS, TypeScript, MySQL",
		description: "Apex Construction Management is a comprehensive web application designed for a construction company, offering streamlined management across multiple departments. It includes modules for user management, transportation, finance, HR, site operations, feedback collection, stock control, and customizable construction packages. Built with React js with MUI, the platform emphasizes maintainability and usability, making it easier for the company to handle daily operations efficiently. The system also supports responsive design and a clean user interface for an improved user experience.",
		projectUrl: "https://github.com/IshanMadusanka13/Apex-Construction",
		demoVideo: "projects/Apex-Construction-demo.mp4",
		technologies: ["React JS", "MUI", "MongoDB", "Node Js"],
		features: [
			"Responsive layout",
			"Basic navigation",
			"Simple form handling",
			"Report Generation",
			"Clean UI design"
		]
	},
	{
		id: "saloncapta",
		name: "Salon Capta",
		type: "Web App",
		status: "Ongoing",
		image: Capta,
		tech: "Next JS, Tailwind CSS, Spring Boot",
		description: "Salon Capta is a modern web-based salon management system designed to streamline both customer and owner experiences. Customers can easily browse services and make online bookings, while salon owners manage appointments, services, and customer data through a dedicated dashboard. Built with Next.js, Tailwind CSS, and Spring Boot, the platform integrates Stripe for secure online payments and provides a responsive, user-friendly interface across devices.",
		projectUrl: "https://github.com/IshanMadusanka13/salon-capta",
		demoVideo: "projects/Salon-Capta-demo.mp4",
		technologies: ["Next JS", "Tailwind CSS", "Spring Boot", "Stripe"],
		features: [
			"Online booking system",
			"Admin dashboard",
			"Secure Stripe payments",
			"Service management",
			"Responsive design"
		]
	},
	{
		id: "skillSync",
		name: "SkillSync",
		type: "Web App",
		status: "Completed",
		image: SkillSync,
		tech: "Vite Js, Spring Boot, PostgreSQL",
		description: "SkillSync is an innovative social media platform designed for individuals passionate about learning and sharing skills, creating a dynamic online community where users can connect,collaborate, and grow together. Built with Vite.js for a fast and responsive frontend, Spring Boot for robust backend services, and PostgreSQL for reliable data management, SkillSync offers a seamless user experience. The platform features user profiles, skill sharing, and community engagement tools, all while ensuring data security and performance.",
		projectUrl: "https://github.com/IshanMadusanka13/skillconnect",
		demoVideo: "/assets/projects/SkillSync-demo.mp4",
		technologies: ["Vite Js", "Spring Boot", "PostgreSQL"],
		features: [
			"User profiles",
			"Skill sharing",
			"Community engagement tools",
			"Data security and performance"
		]
	},
	{
		id: "lioc",
		name: "LiOC",
		type: "Web App",
		status: "Completed",
		image: LiOC,
		tech: "React Js, Spring Boot, MySQL",
		description: "LiOC is a simple fuel station management system designed to streamline operations for fuel stations. It provides a comprehensive platform for managing fuel sales, inventory, and supplier management. Built with React.js for a dynamic user interface, Spring Boot for robust backend services, and MySQL for reliable data storage, LiOC ensures efficient management of fuel station operations.",
		projectUrl: "https://github.com/IshanMadusanka13/LIOC",
		demoVideo: "/assets/projects/LIOC-demo.mp4",
		technologies: ["React Js", "Spring Boot", "MySQL"],
		features: [
			"User profiles",
			"Fuel sales management",
			"Inventory tracking",
			"Supplier management"
		]
	},
	{
		id: "sipnena",
		name: "Sipnena Institute",
		type: "Desktop App",
		status: "Completed",
		image: Sipnena,
		tech: "Java, MySQL",
		description: "Sipnena Institute is a comprehensive desktop application designed for educational institutions, providing a robust platform for managing student and teacher data, class schedules, attendance, and payments. Built with Java and MySQL, the application offers a user-friendly interface that simplifies administrative tasks. It includes features for student enrollment, class management, attendance tracking, and payment processing, making it an essential tool for educational institutions to enhance their operational efficiency.",
		projectUrl: "https://github.com/IshanMadusanka13/",
		demoVideo: "/assets/projects/Sipnena-demo.mp4",
		technologies: ["Java", "MySQL"],
		features: [
			"Student enrollment",
			"Student/Teacher/Class management",
			"Attendance tracking",
			"Payment management",
			"User-friendly interface",
		]
	}
];