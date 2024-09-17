import { HStack, Image, List, Text, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectedGenre}: Props) => {
	const {data, error, isLoading} = useGenres();
	
	if (error.length > 0) {
		console.log("fetching genres: " + error);
	 	return null;
	}

	if (isLoading) {
		return <Spinner/>;
	}


	return(
		<List>
			{data.map(genre => <ListItem key={genre.id} paddingY='4px'>
				<HStack>
					<Image boxSize='30px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
					<Button variant="link" onClick={()=>onSelectedGenre(genre)}>{genre.name}</Button>
				</HStack>
			</ListItem>)}
		</List>
	);
}

export default GenreList;