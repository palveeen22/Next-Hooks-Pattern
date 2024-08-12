"use client";
import { useState } from "react";
import { z } from "zod";
import useHandlePage from "../../_hooks/useRecipes";
import { useRouter } from "next/navigation";
import { TForm, TReturnFormReceipe } from "../../../../types/types";

const schema = z.object({
	name: z.string().nonempty("Name is required"),
	ingredients: z.array(z.string()).nonempty("Ingredients are required"),
	instructions: z.string().nonempty("Instructions are required"),
	cuisineId: z.string().nonempty("Cuisine is required"),
	dietId: z.string().nonempty("Diet is required"),
	difficultyId: z.string().nonempty("Difficulty is required"),
	image: z.string().nonempty("Image is required"),
});

export const useCreateRecipe = (): TReturnFormReceipe => {
	const router = useRouter();
	const initialFormData: TForm = {
		name: "",
		ingredients: "",
		instructions: "",
		cuisineId: "",
		dietId: "",
		difficultyId: "",
		image: "",
	};

	const [formData, setFormData] = useState<TForm>(initialFormData);
	const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
	const [file, setFile] = useState<File | null>(null);
	const [formStatus, setFormStatus] = useState<
		"idle" | "pending" | "success" | "error"
	>("idle");
	const { recipes, cuisines, diets, difficulties } = useHandlePage();

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const isDisabled = formStatus === "pending" || !formData;

	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const formData = new FormData();
			Object.values(e.target.files).forEach((file) => {
				formData.append("file", file);
			});

			try {
				const response: Response = await fetch("/api/upload", {
					method: "POST",
					body: formData,
				});

				if (response.ok) {
					const result = await response.json();
					if (result.success) {
						alert("Upload ok : " + result.name);
						setFormData((prevFormData) => ({
							...prevFormData,
							image: result.name,
						}));
						setFile(result.name);
					} else {
						alert("Upload failed");
					}
				} else {
					throw new Error("Failed to upload image");
				}
			} catch (error) {
				console.error("Error uploading image:", error);
				alert("Upload failed");
			}
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormStatus("pending");

		try {
			const data = {
				id: (recipes.length + 1).toString(),
				name: formData.name,
				ingredients: formData.ingredients.split(",").map((item) => item.trim()),
				instructions: formData.instructions,
				cuisineId: formData.cuisineId,
				dietId: formData.dietId,
				difficultyId: formData.difficultyId,
				image: `/uploads/${formData.image}`,
			};

			schema.parse(data);

			const formDataWithFile = new FormData();
			Object.keys(formData).forEach((key) => {
				formDataWithFile.append(key, formData[key as keyof typeof formData]);
			});
			formDataWithFile.append("image", file!);

			const response: Response = await fetch(
				`${process.env.NEXT_PUBLIC_BASE_URL}/recipes`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (response.ok) {
				setFormStatus("success");
				const { filePath } = await response.json();
				const recipeData = { ...formData, image: filePath };
				console.log("Form successfully submitted!");
				setFormData(initialFormData);
				router.push("/recipes");
			} else {
				console.error("Failed to submit form:", await response.text());
			}
		} catch (error) {
			if (error instanceof z.ZodError) {
				console.error("Validation errors:", error.errors);
				setFormErrors(error.errors);
			} else {
				console.error("Error during form submission:", error);
			}
		}
	};

	return {
		formErrors,
		handleSubmit,
		formData,
		handleChange,
		cuisines,
		difficulties,
		diets,
		handleImageChange,
		formStatus,
		file,
		isDisabled,
	};
};
