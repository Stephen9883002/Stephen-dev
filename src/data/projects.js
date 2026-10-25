import fashionAppImg from '../assets/fashion app.png';
import kwickCvApp from '../assets/Kwik-cv.png';
import carDealership from '../assets/car-dealers.png';

export const projects = [
	{
		id: 1,
		title: 'Kwik Fashion',
		description:
			'A modern fashion e-commerce platform with a seamless shopping experience, responsive design, and clean UI.',
		tech: ['React', 'PostgreSQL', 'Node.js', 'Express'],
		link: 'https://kwik-fashiondev.vercel.app',
		image: fashionAppImg,
		inDevelopment: false, // This one is live
	},
	{
		id: 2,
		title: 'Kwikcv Resume Builder',
		description:
			'A fast, ATS-friendly resume builder that creates professional resumes in 60 seconds.Features live preview, multiple templates, and one-click export. Built to help students and job seekers land interviews faster.',
		tech: ['React', 'Node.js', 'JavaScript'],
		link: '#',
		image: kwickCvApp,
		inDevelopment: true, // This one is not live
	},
	{
		id: 3,
		title: 'Car Dealership',
		description:
			'A modern car dealership platform to browse, filter, and book cars online. with inventory management, test-drive booking, and admin dashboard.',
		tech: ['Html', 'Css', 'JavaScript'],
		link: '#',
		image: carDealership,
		inDevelopment: true, // This one is not live
	},
];
