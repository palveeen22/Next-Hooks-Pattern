export const changeSlug = (input: string | undefined): string => {
	if (!input) {
		return "";
	}
	return encodeURIComponent(input.toLowerCase().replace(/\s+/g, "-"));
};
