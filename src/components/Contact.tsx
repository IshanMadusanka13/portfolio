import React, { useState, useRef } from 'react';
import {
	Mail,
	Phone,
	MapPin,
	Send,
	Linkedin,
	Github,
	FileText,
	CheckCircle,
	ArrowUp,
	User,
	MessageSquare,
	Calendar
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [loading, setLoading] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const formRef = useRef(null);

	const EMAILJS_CONFIG = {
		SERVICE_ID: 'service_ljfr49s',
		TEMPLATE_ID: 'template_5bpbclg',
		PUBLIC_KEY: '26mO2wmEZDTbVnEfX'
	};
	emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));

		if (errors[name as keyof typeof errors]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const handleSubmit = async () => {
		if (!validateForm()) return;

		setLoading(true);

		try {
			const emailParams = {
				from_name: formData.name,
				from_email: formData.email,
				subject: formData.subject,
				message: formData.message,
				to_email: 'madusankaishan13@gmail.com',
				reply_to: formData.email
			};

			const response = await emailjs.send(
				EMAILJS_CONFIG.SERVICE_ID,
				EMAILJS_CONFIG.TEMPLATE_ID,
				emailParams
			);

			if (response.status === 200) {
				setLoading(false);
				setShowSuccess(true);
				setFormData({ name: '', email: '', subject: '', message: '' });
				setErrors({});

				setTimeout(() => {
					setShowSuccess(false);
				}, 5000);
			}
		} catch (error) {
			setLoading(false);
			console.error('Email sending failed:', error);

			alert('Failed to send message. Please try again or contact me directly.');
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Lets Work Together
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Have a project in mind? Id love to hear about it. Lets discuss how we can bring your ideas to life.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-12">
					<div className="lg:col-span-1">
						<div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-8">
							<div className="text-center mb-8">
								<div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
									<User className="w-12 h-12 text-white" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2">Ishan Madusanka</h3>
								<p className="text-gray-600 text-lg">Full Stack Developer</p>
							</div>

							<div className="space-y-6 mb-8">
								<div className="flex items-center space-x-4">
									<div className="bg-blue-100 p-3 rounded-lg">
										<Mail className="w-5 h-5 text-blue-600" />
									</div>
									<div>
										<p className="text-sm text-gray-500">Email</p>
										<p className="text-gray-900 font-medium">madusankaishan13@gmail.com</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="bg-purple-100 p-3 rounded-lg">
										<MapPin className="w-5 h-5 text-purple-600" />
									</div>
									<div>
										<p className="text-sm text-gray-500">Location</p>
										<p className="text-gray-900 font-medium">Colombo, Sri Lanka</p>
									</div>
								</div>
							</div>

							<div className="border-t pt-8">
								<p className="text-sm text-gray-500 mb-4 text-center">Connect with me</p>
								<div className="flex justify-center space-x-4">
									<a
										href="https://linkedin.com/in/ishan-madusanka"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110"
									>
										<Linkedin className="w-5 h-5" />
									</a>
									<a
										href="https://github.com/IshanMadusanka13"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110"
									>
										<Github className="w-5 h-5" />
									</a>
									<Link
										href="/resume"
										className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110"
									>
										<FileText className="w-5 h-5" />
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:col-span-2">
						<div className="bg-white rounded-2xl shadow-xl p-8">
							<div className="mb-8">
								<h3 className="text-3xl font-bold text-gray-900 mb-2">Send Message</h3>
								<p className="text-gray-600">I will get back to you within shortly</p>
							</div>

							<div className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.name ? 'border-red-500' : 'border-gray-300'
												}`}
											placeholder="Your full name"
										/>
										{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
											Email Address *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300'
												}`}
											placeholder="your.email@example.com"
										/>
										{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
									</div>
								</div>

								<div>
									<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
										Subject *
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleInputChange}
										className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.subject ? 'border-red-500' : 'border-gray-300'
											}`}
										placeholder="What's this about?"
									/>
									{errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										rows={6}
										className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
											}`}
										placeholder="Tell me about your project or idea..."
									/>
									{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
								</div>

								<button
									onClick={handleSubmit}
									disabled={loading}
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{loading ? (
										<>
											<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
											<span>Sending...</span>
										</>
									) : (
										<>
											<Send className="w-5 h-5" />
											<span>Send Message</span>
										</>
									)}
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center mt-16">
					<button
						onClick={scrollToTop}
						className="bg-white shadow-lg hover:shadow-xl p-4 rounded-full transition-all duration-300 hover:scale-110"
					>
						<ArrowUp className="w-6 h-6 text-gray-600" />
					</button>
				</div>
			</div>

			{showSuccess && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
					<div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
						<div className="mb-6">
							<CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
							<p className="text-gray-600">
								Thank you for reaching out. I will get back to you shortly.
							</p>
						</div>
						<button
							onClick={() => setShowSuccess(false)}
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
						>
							Close
						</button>
					</div>
				</div>
			)}

			{loading && (
				<div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-40">
					<div className="bg-white p-8 rounded-2xl shadow-xl">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
						<p className="text-gray-600 mt-4 text-center">Sending your message...</p>
					</div>
				</div>
			)}
		</div>
	);
};
export default Contact;