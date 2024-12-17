import useData ,{ FectResponse } from "./useData";
import { GameQueryFromApp } from "../App";
import { GameQueryFromGrid } from "../components/GameGrid";
import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

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
		genres: gameQueryFromApp.genre?.id,
		parent_platforms: gameQueryFromGrid.platform?.id,
		ordering: gameQueryFromGrid.sortOrdera,
		search: gameQueryFromApp.searchInput,
		page: pageParam}
	})
	.then(res => res.data),
	getNextPageParam: (lastPage, allPages) => {
		return lastPage.next ? allPages.length + 1 : undefined ;
	}
})
// const useGames = (gameQueryFromApp: GameQueryFromApp, gameQueryFromGrid: GameQueryFromGrid) => useData<Game>
// 	(
// 		'/games',
// 		{
// 			params: {
// 				genres: gameQueryFromApp.genre?.id,
// 				platforms: gameQueryFromGrid.platform?.id,
// 				ordering: gameQueryFromGrid.sortOrdera,
// 				search: gameQueryFromApp.searchInput,
// 				page: gameQueryFromApp.page
// 			}
// 		},
// 		[gameQueryFromApp, gameQueryFromGrid] /** Array of dependencies */
// 	);

export default useGames;