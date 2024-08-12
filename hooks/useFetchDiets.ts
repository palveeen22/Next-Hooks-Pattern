import { useQuery } from "@tanstack/react-query";
import { TDiets } from "../types/types";

const useFetchDiets = () => {
	const { data: diets, isLoading } = useQuery<TDiets[]>({
		queryKey: ["diets"],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/diets`).then(
				(resp: Response) => resp.json()
			),
	});
	return {
		diets,
		isLoading,
	};
};

export default useFetchDiets;
