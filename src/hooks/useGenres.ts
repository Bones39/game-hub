import useData, { FectResponse } from "./useData";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery({
	queryKey: ['genres'],
	queryFn: () => apiClient.get<FectResponse<Genre>>('/genres')
		.then(res => res.data),
	staleTime: 24 * 60 * 60 * 1000, //24h
	/* Could use initialData here to insert it into the cache but the initial datas for genres were not downloaded */
})

export default useGenres;