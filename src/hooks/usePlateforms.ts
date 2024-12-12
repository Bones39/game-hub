import { useQuery } from "@tanstack/react-query";
import useData from "./useData";
import { Platform } from "./useGames";
import apiClient from "../services/api-client";

// still using useData here instead of reactQuery so have both methods in case of inspiration needed
const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

/* const usePlatforms = () => useQuery({
	queryKey: ['palteforms'],
	queryFn: () => apiClient.get<FectResponse<PLateform>>('/plateforms')
		.then(res => res.data),
	staleTime: 24 * 60 * 60 *1000 //24h
}) */

export default usePlatforms;