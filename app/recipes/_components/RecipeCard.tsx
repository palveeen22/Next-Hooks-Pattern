import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TCardProps } from "~/types/types";
import { changeSlug } from "~/helpers/index";

const RecipeCard = ({ recipe, diets, cuisines, difficulties }: TCardProps) => {
	const diet =
		diets?.find((d) => d.id === recipe.dietId)?.name || "Unknown Diet";
	const cuisine =
		cuisines?.find((c) => c.id === recipe.cuisineId)?.name || "Unknown Cuisine";
	const difficulty =
		difficulties?.find((d) => d.id === recipe.difficultyId)?.name ||
		"Unknown Difficulty";

	return (
		<div className="w-full p-3 shadow-xl rounded-3xl bg-white flex flex-col justify-center items-center gap-4 relative">
			<div className="w-full relative">
				<Image
					src={
						recipe?.image ||
						"https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png"
					}
					alt={`${recipe?.name} recipe`}
					width={100}
					height={100}
					priority
					className="rounded-3xl w-full h-60 object-cover"
				/>
				<div className="absolute bottom-4 left-4 flex gap-2">
					<button className="bg-red-500 py-2 px-6 rounded-full">
						<p className="text-white font-light">#{cuisine}</p>
					</button>
					<button className="bg-red-500 py-2 px-6 rounded-full">
						<p className="text-white font-light">#{diet}</p>
					</button>
				</div>
			</div>
			<div className="w-full flex flex-col items-center gap-2">
				<h3 className="text-black font-light text-3xl">{recipe?.name}</h3>
				<h6 className="font-light text-sm text-[#898989]">{difficulty}</h6>
				<Link href={`/recipes/${changeSlug(recipe?.name)}`}>
					<button className="bg-red-500 w-full py-2 px-6 rounded-full">
						<p className="text-white font-light">See Details → </p>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default RecipeCard;
