"use client";
import { useEffect, useState } from "react";
import { TRecipe, TReturnReceipe } from "~/types/types";
import useFetchComment from "~/hooks/useFetchComment";
import useFetchCuisine from "~/hooks/useFetchCuisine";
import useFetchDiets from "~/hooks/useFetchDiets";
import useFetchDifficultie from "~/hooks/useFetchDifficultie";
import useFetchRecipies from "~/hooks/useFetchRecipies";
import { RECIPES_PER_PAGE } from "../_constants";

export default function useRecipes(): TReturnReceipe {
	const { recipes, isLoading } = useFetchRecipies();
	const { cuisines } = useFetchCuisine();
	const { comments } = useFetchComment();

	const { difficulties } = useFetchDifficultie();
	const { diets } = useFetchDiets();

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [filteredRecipes, setFilteredRecipes] = useState<string[] | TRecipe[]>(
		[]
	);
	const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
	const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(
		[]
	);
	const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
	const [searchName, setSearchName] = useState<string | undefined>("");

	// pagination
	const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
	const endIndex = startIndex + RECIPES_PER_PAGE;
	const currentRecipes = recipes?.slice(startIndex, endIndex);

	const handleNextPage = () => setCurrentPage((prev: number) => prev + 1);
	const handlePreviousPage = () =>
		setCurrentPage((prev: number) => Math.max(prev - 1, 1));

	const handleCuisineChange = (cuisineId: string) => {
		setSelectedCuisines((prevState: string[]) =>
			prevState.includes(cuisineId)
				? prevState.filter((id) => id !== cuisineId)
				: [...prevState, cuisineId]
		);
	};

	const handleDifficultyChange = (difficultyId: string) => {
		setSelectedDifficulties((prevState: string[]) =>
			prevState.includes(difficultyId)
				? prevState.filter((id) => id !== difficultyId)
				: [...prevState, difficultyId]
		);
	};

	const handleDietChange = (dietId: string) => {
		setSelectedDiets((prevState: string[]) =>
			prevState.includes(dietId)
				? prevState.filter((id) => id !== dietId)
				: [...prevState, dietId]
		);
	};

	// searchName, filtering
	useEffect(() => {
		const applyFilters = () => {
			let filtered: TRecipe[] = recipes;

			if (searchName) {
				filtered = filtered.filter((recipe: TRecipe) =>
					recipe.name.toLowerCase().includes(searchName.toLowerCase())
				);
			}

			if (selectedCuisines.length > 0) {
				filtered = filtered.filter((recipe: TRecipe) =>
					selectedCuisines.includes(recipe.cuisineId)
				);
			}

			if (selectedDifficulties.length > 0) {
				filtered = filtered.filter((recipe: TRecipe) =>
					selectedDifficulties.includes(recipe.difficultyId)
				);
			}

			if (selectedDiets.length > 0) {
				filtered = filtered.filter((recipe: TRecipe) =>
					selectedDiets.includes(recipe.dietId)
				);
			}

			setFilteredRecipes(filtered);
		};

		applyFilters();
	}, [
		recipes,
		searchName,
		selectedCuisines,
		selectedDifficulties,
		selectedDiets,
	]);

	return {
		recipes,
		isLoading,
		handlePreviousPage,
		handleNextPage,
		currentRecipes,
		currentPage,
		endIndex,
		cuisines,
		diets,
		difficulties,
		comments,
		searchName,
		setSearchName,
		filteredRecipes,
		setFilteredRecipes,
		selectedCuisines,
		setSelectedCuisines,
		selectedDifficulties,
		setSelectedDifficulties,
		selectedDiets,
		setSelectedDiets,
		handleCuisineChange,
		handleDifficultyChange,
		handleDietChange,
		RECIPES_PER_PAGE,
	};
}
