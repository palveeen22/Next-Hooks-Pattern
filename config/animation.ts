export const sectionVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export const cardVariants = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};

export const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};
