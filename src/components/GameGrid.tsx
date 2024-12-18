import { Box, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQueryFromApp } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import GameHeading from "./GameHeading";
import PlateformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

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

	const numberOfGamesFetched = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	if (error) <Text>{error.message}</Text>;

	return (
		<>
			<Box>
				<GameHeading gameQueryFromApp={gameQuery} gameQueryFromGrid={gameQueryFromGrid}></GameHeading>
				<HStack>
					<PlateformSelector selectedPlatform={gameQueryFromGrid.platform} onSelectPlatform={(platform) => setGameQueryFromGrid({...gameQueryFromGrid, platform})}  />
					<SortSelector selectedSortOrder={gameQueryFromGrid.sortOrdera} onSelectSortOrder={(sortOrdera)=> setGameQueryFromGrid({...gameQueryFromGrid, sortOrdera})}/>
				</HStack>
			</Box>
			<InfiniteScroll dataLength={numberOfGamesFetched} hasMore={!!hasNextPage} next={()=>fetchNextPage()} loader={<Spinner/>}>
				<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3} padding='10px'>
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
			</InfiniteScroll>
		</>
	)
}

export default GameGrid;