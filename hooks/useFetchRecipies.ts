import { useQuery } from "@tanstack/react-query";
import { TRecipe } from "../types/types";

const useFetchRecipies = () => {
	const { data: recipes, isLoading } = useQuery<TRecipe[]>({
		queryKey: ["recipes"],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/recipes`).then(
				(resp: Response) => resp.json()
			),
	});
	return {
		recipes,
		isLoading,
	};
};

export default useFetchRecipies;
