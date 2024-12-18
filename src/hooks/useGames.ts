import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQueryFromApp } from "../App";
import { GameQueryFromGrid } from "../components/GameGrid";
import apiClient from "../services/api-client";
import { FectResponse } from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
	metacritic: number;
	released: string;
}

const useGames = (gameQueryFromApp: GameQueryFromApp, gameQueryFromGrid: GameQueryFromGrid) => useInfiniteQuery<FectResponse<Game>, Error>({
	queryKey: ['games', gameQueryFromApp, gameQueryFromGrid],
	queryFn: ({ pageParam = 1 }) => apiClient.get<FectResponse<Game>>('/games', {params: {
		genres: gameQueryFromApp.genreId,
		parent_platforms: gameQueryFromGrid.platform?.id,
		ordering: gameQueryFromGrid.sortOrdera,
		search: gameQueryFromApp.searchInput,
		page: pageParam}
	})
	.then(res => res.data),
	getNextPageParam: (lastPage, allPages) => {
		return lastPage.next ? allPages.length + 1 : undefined ;
	},
	staleTime: 24 * 60 * 60 * 1000 //24h
})

export default useGames;