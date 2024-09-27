import useData from "./useData";
import { GameQueryFromApp } from "../App";

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
}

const useGames = (gameQueryFromApp: GameQueryFromApp, selectedPlatform: Platform | null, selectedSortOrder: string) => useData<Game>
	(
		'/games',
		{
			params: {
				genres: gameQueryFromApp.genre?.id,
				platforms: selectedPlatform?.id,
				ordering: selectedSortOrder,
				search: gameQueryFromApp.searchInput
			}
		},
		[gameQueryFromApp, selectedPlatform?.id, selectedSortOrder] /** Array of dependencies */
	);

export default useGames;