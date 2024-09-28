import { Badge } from "@chakra-ui/react";

interface Props {
	score: number | undefined;
}

const CriticScore = ({score}: Props) => {
	let color = score ? (score > 75 ? 'green' : (score > 60 ? 'yellow' : 'red')) : "grey";

	return (
		<Badge colorScheme={color} fontSize='14px' padding={2} borderRadius='4px'>{score || "--"}</Badge>
	)
}

export default CriticScore;