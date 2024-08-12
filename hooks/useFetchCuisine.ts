import { useQuery } from "@tanstack/react-query";
import { TCuisine } from "../types/types";

const useFetchCusine = () => {
	const { data: cuisines, isLoading } = useQuery<TCuisine[]>({
		queryKey: ["cuisines"],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cuisines`).then(
				(resp: Response) => resp.json()
			),
	});
	return {
		cuisines,
		isLoading,
	};
};

export default useFetchCusine;
