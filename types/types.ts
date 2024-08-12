import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { z } from "zod";

export type TMetaData = {
	metadataBase: URL;
	title: string;
	description: string;
};

export type TIngredient = string;
export type TProcedure = TIngredient;

export type TRecipe = {
	id: string;
	name: string;
	ingredients: TIngredient[];
	instructions: string;
	cuisineId: string;
	dietId: string;
	difficultyId: string;
	image: string;
};

export type TReturnReceipe = {
	recipes: TRecipe[];
	isLoading: boolean;
	handlePreviousPage: () => void;
	handleNextPage: () => void;
	currentRecipes: TRecipe[];
	currentPage: number;
	endIndex: number;
	cuisines: TCuisine[];
	difficulties: TCuisine[];
	diets: TCuisine[];
	comments: TComment[];
	searchName: string;
	setSearchName: Dispatch<SetStateAction<string>>;
	filteredRecipes: string[] | TRecipe[];
	setFilteredRecipes: Dispatch<SetStateAction<string[] | TRecipe[]>>;
	selectedCuisines: string[];
	setSelectedCuisines: Dispatch<SetStateAction<string[]>>;
	selectedDifficulties: string[];
	setSelectedDifficulties: Dispatch<SetStateAction<string[]>>;
	selectedDiets: string[];
	setSelectedDiets: Dispatch<SetStateAction<string[]>>;
	handleCuisineChange: (cuisineId: string) => void;
	handleDifficultyChange: (difficultyId: string) => void;
	handleDietChange: (dietId: string) => void;
	RECIPES_PER_PAGE: number;
};

export type TReturnDetails = {
	recipes: TRecipe[];
	recipe: TRecipe;
	isLoading: boolean;
	comments: TComment[];
	recipeComments: TComment[];
	refetch: (
		options?: RefetchOptions
	) => Promise<QueryObserverResult<TComment[], Error>>;
	findRecipeByName: (name: string) => TRecipe;
};

export type TReturnFormComment = {};

export type TReturnFormReceipe = {
	formErrors: z.ZodIssue[];
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
	formData: TForm;
	handleChange: (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => void;
	cuisines: TCuisine[];
	difficulties: TCuisine[];
	diets: TCuisine[];
	handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	formStatus: "idle" | "pending" | "success" | "error";
	file: File;
	isDisabled: boolean;
};

export interface IListRecipe {
	data: TRecipe[];
}

export interface IErrorResponse {
	error: string;
}

export type TComment = {
	id: string;
	recipeId: string;
	comment: string;
	rating: number;
	date: string | Date;
};

export type TCuisine = {
	id: string | number;
	name: string | number;
};

export type TDiets = TCuisine;

export type TDifficultie = TDiets;

export type TForm = {
	name: string;
	ingredients: string;
	instructions: string;
	cuisineId: string;
	dietId: string;
	difficultyId: string;
	image: string;
};

export type TCardProps = {
	recipe: TRecipe;
	diets: TDiets[];
	cuisines: TCuisine[];
	difficulties: TDifficultie[];
};

export type TPropsFormRecipe = {
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
	formData: TForm;
	handleChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => void;
	cuisines: TCuisine[];
	difficulties: TCuisine[];
	diets: TCuisine[];
	file: File;
	handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
	isDisabled: boolean;
};

export type TPropsCheckboxCard = {
	text: string;
	data: TCuisine[];
	selected: string[];
	handleChange: (cuisineId: string) => void;
};

export type TReturnCreateComment = {
	recipes: TRecipe[];
	recipe: TRecipe;
	formStatus: any;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
	newComment: string;
	setNewComment: Dispatch<SetStateAction<string>>;
	rating: number;
	setRating: Dispatch<SetStateAction<number>>;
	isLoading: boolean;
	comments: TComment[];
	findRecipeByName: (name: string) => TRecipe;
	isDisabled: boolean;
};
