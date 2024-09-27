import useData from "./useData";
import { GameQueryFromApp } from "../App";
import { GameQueryFromGrid } from "../components/GameGrid";

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

const useGames = (gameQueryFromApp: GameQueryFromApp, gameQueryFromGrid: GameQueryFromGrid) => useData<Game>
	(
		'/games',
		{
			params: {
				genres: gameQueryFromApp.genre?.id,
				platforms: gameQueryFromGrid.platform?.id,
				ordering: gameQueryFromGrid.sortOrdera,
				search: gameQueryFromApp.searchInput
			}
		},
		[gameQueryFromApp, gameQueryFromGrid] /** Array of dependencies */
	);

export default useGames;