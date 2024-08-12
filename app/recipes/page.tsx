"use client";
import RecipeCard from "./_components/RecipeCard";
import Link from "next/link";
import NotFound from "../../components/NotFound";
import { MotionArticle, MotionSection } from "../../components/MotionClient";
import useRecipes from "./_hooks/useRecipes";
import CheckboxCard from "./_components/CheckboxCard";
import { containerVariants, sectionVariants } from "~/config/animation";
import { TRecipe } from "~/types/types";
import SubTittle from "./_components/SubTittle";
import Tittle from "./_components/Tittle";

const Page = () => {
	const {
		handlePreviousPage,
		handleNextPage,
		currentPage,
		endIndex,
		cuisines,
		diets,
		difficulties,
		searchName,
		setSearchName,
		filteredRecipes,
		selectedCuisines,
		selectedDifficulties,
		selectedDiets,
		handleCuisineChange,
		handleDifficultyChange,
		handleDietChange,
		RECIPES_PER_PAGE,
	} = useRecipes();

	return (
		<MotionSection
			className="flex flex-col-reverse md:flex-row lg:flex-row justify-start gap-4"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* Filter section */}
			<div className="w-full md:w-[20%] lg:w-[20%] p-4 shadow-md">
				<SubTittle text="Search Recipes" />
				<div className="mb-4 mt-4">
					<input
						type="text"
						id="name"
						value={searchName}
						onChange={(e) => setSearchName(e.target.value)}
						placeholder="Search here..."
						className="border border-gray-300 p-2 rounded-xl block w-full focus:border-red-500 focus:outline-none text-red-500"
					/>
				</div>
				<SubTittle text="Filters" />
				<CheckboxCard
					text="All the world cuisines"
					data={cuisines}
					selected={selectedCuisines}
					handleChange={handleCuisineChange}
				/>
				<CheckboxCard
					text="Diet Friendly"
					data={diets}
					selected={selectedDiets}
					handleChange={handleDietChange}
				/>
				<CheckboxCard
					text="Recipe Difficulty"
					data={difficulties}
					selected={selectedDifficulties}
					handleChange={handleDifficultyChange}
				/>
			</div>

			{/* Recipe List */}
			<MotionArticle
				className="w-full md:w-[80%] lg:w-[80%] text-black p-8"
				variants={sectionVariants}
			>
				<Tittle text="Results for" />
				<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
					<SubTittle text="Recipes found for your search criteria" />
					<Link href={"/recipes/create"}>
						<button className="bg-red-500 mx-auto py-3 px-16 rounded-full mb-2 md:mb-0 lg:mb-0">
							<p className="text-white font-light"> Add + </p>
						</button>
					</Link>
				</div>
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{filteredRecipes?.length > 0 ? (
							(
								filteredRecipes?.slice(
									(currentPage - 1) * RECIPES_PER_PAGE,
									RECIPES_PER_PAGE * currentPage
								) as TRecipe[]
							).map((recipe, index: number) => (
								<RecipeCard
									key={index}
									recipe={recipe}
									diets={diets}
									cuisines={cuisines}
									difficulties={difficulties}
								/>
							))
						) : (
							<NotFound />
						)}
					</div>

					{filteredRecipes?.length > 0 && (
						<div className="flex justify-center mt-14">
							<button
								onClick={handlePreviousPage}
								disabled={currentPage === 1}
								className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md disabled:bg-gray-300"
							>
								←
							</button>
							<button
								onClick={handleNextPage}
								disabled={endIndex >= filteredRecipes?.length}
								className="px-4 py-2 bg-red-500 text-white rounded-md disabled:bg-gray-300"
							>
								→
							</button>
						</div>
					)}
				</div>
			</MotionArticle>
		</MotionSection>
	);
};

export default Page;
