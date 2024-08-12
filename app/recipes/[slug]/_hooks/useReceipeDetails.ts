import useHandlePage from "../../_hooks/useRecipes";
import useFetchComment from "~/hooks/useFetchComment";
import { TRecipe, TReturnDetails } from "~/types/types";

const useReceipeDetails = (slug: string): TReturnDetails => {
	const { recipes, isLoading } = useHandlePage();
	const { comments, refetch } = useFetchComment();

	const findRecipeByName = (name: string) => {
		return recipes?.find(
			(recipe: TRecipe) => recipe?.name.toLowerCase() === name.toLowerCase()
		);
	};

	const recipe = findRecipeByName(slug.replace(/-/g, " "));

	const recipeComments = comments?.filter(
		(comment) => comment.recipeId === recipe?.id
	);

	return {
		recipes,
		recipe,
		isLoading,
		comments,
		recipeComments,
		refetch,
		findRecipeByName,
	};
};

export default useReceipeDetails;
