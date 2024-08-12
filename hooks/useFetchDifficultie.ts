import { useQuery } from "@tanstack/react-query";
import { TDifficultie } from "../types/types";

const useFetchDifficultie = () => {
	const { data: difficulties, isLoading } = useQuery<TDifficultie[]>({
		queryKey: ["difficulties"],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/difficulties`).then(
				(resp: Response) => resp.json()
			),
	});
	return {
		difficulties,
		isLoading,
	};
};

export default useFetchDifficultie;
