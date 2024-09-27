import { Heading } from "@chakra-ui/react"
import { GameQueryFromApp } from "../App"
import { GameQueryFromGrid } from "./GameGrid";

interface Props {
	gameQueryFromApp: GameQueryFromApp;
	gameQueryFromGrid: GameQueryFromGrid;
}

const GameHeading = ({gameQueryFromApp, gameQueryFromGrid}: Props) => {
	return (
		<Heading as='h1' marginY='12px'>{`${gameQueryFromGrid.platform?.name || ''} ${gameQueryFromApp.genre?.name || ''} games`}</Heading>
	)
}

export default GameHeading;