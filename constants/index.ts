import { TMetaData } from "~/types/types";

export const MetaData: TMetaData = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
	title: "RecipeBook - Discover Recipes!",
	description: "Want to eat just click and cook",
};

export const mainpage = {
	banner: "RecipeBoo",
	title: "Discover Recipes",
	desc: "RecipeBook",
	button: "Explore",
};

export const footerTitle = {
	title: "RecipeBoo Pro",
	desc: "Enchance Your Culinary Skills Now!",
	icon: "ReceipeBoo",
};
export const navbarItem = [
	{
		title: "Main",
		path: "",
	},
	{
		title: "Cusines",
		path: "",
	},
	{
		title: "Dietary",
		path: "",
	},
];

export const footerItem = [
	{
		title: "Support",
		path: "",
	},
	{
		title: "Guidelines",
		path: "",
	},
	{
		title: "Feedback Hub",
		path: "",
	},
	{
		title: "Cooking Tips",
		path: "",
	},
	{
		title: "Get in Touch",
		path: "",
	},
];
