import { useQuery } from "@tanstack/react-query";
import { TComment } from "../types/types";

const useFetchComment = () => {
	const {
		data: comments,
		isLoading,
		refetch,
	} = useQuery<TComment[]>({
		queryKey: ["comments"],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comments`).then(
				(resp: Response) => resp.json()
			),
	});
	return {
		comments,
		isLoading,
		refetch,
	};
};

export default useFetchComment;
