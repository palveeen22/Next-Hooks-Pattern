"use client";
import { FormEvent, useState } from "react";
import { z } from "zod";
import useReceipeDetails from "./useReceipeDetails";
import { TReturnCreateComment } from "~/types/types";

const scheme = z.object({
	id: z.string().nonempty("ID is required"),
	recipeId: z.string().nonempty("Recipe ID is required"),
	comment: z.string().nonempty("Comment is required"),
	rating: z
		.number()
		.min(1, "Rating must be at least 1")
		.max(5, "Rating must be at most 5"),
	date: z.string().nonempty("Date is required"),
});

const useCreateComment = (slug: string): TReturnCreateComment => {
	const { recipes, recipe, isLoading, comments, refetch, findRecipeByName } =
		useReceipeDetails(slug);

	const [rating, setRating] = useState<number>(0);
	const [newComment, setNewComment] = useState<string>("");
	const [formStatus, setFormStatus] = useState<
		"idle" | "pending" | "success" | "error"
	>("idle");

	const isDisabled = !newComment || !rating || formStatus === "pending";

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormStatus("pending");

		try {
			const commentData = {
				id: (comments.length + 1).toString(),
				recipeId: recipe?.id,
				comment: newComment,
				rating: rating,
				date: new Date().toISOString(),
			};

			scheme.parse(commentData);

			const response: Response = await fetch(
				`${process.env.NEXT_PUBLIC_BASE_URL}/comments`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(commentData),
				}
			);

			if (response.ok) {
				setFormStatus("success");
				setNewComment("");
				setRating(0);
				refetch();
			} else {
				throw new Error("Failed to submit comment");
			}
		} catch (error) {
			console.error("Error:", error);
			setFormStatus("error");
		}
	};

	return {
		recipes,
		recipe,
		formStatus,
		handleSubmit,
		newComment,
		setNewComment,
		rating,
		setRating,
		isLoading,
		comments,
		findRecipeByName,
		isDisabled,
	};
};

export default useCreateComment;
