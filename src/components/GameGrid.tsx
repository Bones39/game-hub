import { HStack, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import PlateformSelector from "./PlatformSelector";
import { Genre } from "../hooks/useGenres";
import { useState } from "react";
import SortSelector from "./SortSelector";
import { GameQueryFromApp } from "../App";

interface Props {
	gameQuery: GameQueryFromApp;
}

export interface GameQueryFromGrid {
	platform: Platform | null;
	sortOrdera: string;
}

const GameGrid = ({gameQuery}: Props)	=> {

	const [gameQueryFromGrid, setGameQueryFromGrid] = useState({} as GameQueryFromGrid);

	const {data, error, isLoading} = useGames(gameQuery, gameQueryFromGrid);
	const skeletons = [1,2,3,4,5,6];


	return (
		<>
			<HStack>
				<PlateformSelector selectedPlatform={gameQueryFromGrid.platform} onSelectPlatform={(platform) => setGameQueryFromGrid({...gameQueryFromGrid, platform})}  />
				<SortSelector selectedSortOrder={gameQueryFromGrid.sortOrdera} onSelectSortOrder={(sortOrdera)=> setGameQueryFromGrid({...gameQueryFromGrid, sortOrdera})}/>
			</HStack>
			{error && <p>{error}</p>}
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={3}>
				{isLoading && skeletons.map(skeleton => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton/>
					</GameCardContainer>
				))}
				{data.map(game => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} /> 
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	)
}

export default GameGrid;