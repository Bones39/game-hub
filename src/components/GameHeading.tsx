import { Heading } from "@chakra-ui/react"
import { GameQueryFromApp } from "../App"
import { GameQueryFromGrid } from "./GameGrid";
import useGenres from "../hooks/useGenres";

interface Props {
	gameQueryFromApp: GameQueryFromApp;
	gameQueryFromGrid: GameQueryFromGrid;
}

const GameHeading = ({gameQueryFromApp, gameQueryFromGrid}: Props) => {
	const {data: genres} = useGenres();
	const genre = genres?.results.find(g => g.id === gameQueryFromApp.genreId)

	return (
		<Heading as='h1' marginY='12px'>{`${gameQueryFromGrid.platform?.name || ''} ${genre?.name || ''} games`}</Heading>
	)
}

export default GameHeading;