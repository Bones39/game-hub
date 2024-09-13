import { HStack, Image, List, Text, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const {data, error, isLoading} = useGenres();

	return(
		<List>
			{data.map(genre => <ListItem key={genre.id} paddingY='4px'>
				<HStack>
					<Image boxSize='30px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
					<Text fontSize='lg' paddingY="5px">{genre.name}</Text>
				</HStack>
			</ListItem>)}
		</List>
	);
}

export default GenreList;