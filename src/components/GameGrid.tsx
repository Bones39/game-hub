import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import PlateformSelector from "./PlatformSelector";
import { Game } from "../hooks/useGames";
import { useState } from "react";
import SortSelector from "./SortSelector";
import { GameQueryFromApp } from "../App";
import GameHeading from "./GameHeading";
import React from "react";

interface Props {
	gameQuery: GameQueryFromApp;
}

export interface GameQueryFromGrid {
	platform: Platform | null;
	sortOrdera: string;
}

const GameGrid = ({gameQuery}: Props)	=> {

	const [gameQueryFromGrid, setGameQueryFromGrid] = useState({} as GameQueryFromGrid);

	const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery, gameQueryFromGrid);
	const skeletons = [1,2,3,4,5,6];

	if (error) <Text>{error.message}</Text>;

	return (
		<Box padding='10px'>
			<Box>
				<GameHeading gameQueryFromApp={gameQuery} gameQueryFromGrid={gameQueryFromGrid}></GameHeading>
				<HStack>
					<PlateformSelector selectedPlatform={gameQueryFromGrid.platform} onSelectPlatform={(platform) => setGameQueryFromGrid({...gameQueryFromGrid, platform})}  />
					<SortSelector selectedSortOrder={gameQueryFromGrid.sortOrdera} onSelectSortOrder={(sortOrdera)=> setGameQueryFromGrid({...gameQueryFromGrid, sortOrdera})}/>
				</HStack>
			</Box>
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3}>
				{isLoading && skeletons.map(skeleton => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton/>
					</GameCardContainer>
				))}
				{data?.pages.map((page, index) =>
					<React.Fragment key={index}>
						{page.results.map(game =>
							<GameCardContainer key={game.id}>
								<GameCard game={game} /> 
							</GameCardContainer>)}
					</React.Fragment>)}
			</SimpleGrid>
			{hasNextPage && <Button onClick={()=>fetchNextPage()} marginY={4}>{isFetchingNextPage? "Loading..." : "Load more"}</Button>}
		</Box>
	)
}

export default GameGrid;