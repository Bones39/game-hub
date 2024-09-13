import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = ()	=> {

	const {data, error, isLoading} = useGames();
	const skeletons = [1,2,3,4,5,6];

	return (
		<>
			{error && <p>{error}</p>}
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={3}>
				{isLoading && skeletons.map(skeleton => (
					<GameCardContainer key={Math.floor(Math.random() * 10000)}>
						<GameCardSkeleton key={skeleton}/>
					</GameCardContainer>
				))}
				{data.map(game => (
					<GameCardContainer key={Math.floor(Math.random() * 10000)}>
						<GameCard game={game} key={game.id} /> 
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	)
}

export default GameGrid;