
import { Card, CardBody, Heading, Image, HStack, Tooltip, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	game: Game;
}

const GameCard = ({game}: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)}/>
			<CardBody>
				<Tooltip label={game.name}>
					<Heading noOfLines={1} fontSize='xl'>{game.name}</Heading>
				</Tooltip>
				<Text marginTop='5pt' fontSize='sm' color='grey'>{game.released}</Text>
				<HStack justifyContent='space-between'>
					<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	)
}

export default GameCard;