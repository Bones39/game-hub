import { HStack, Image, List, Text, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectedGenre: (genre: Genre | null) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectedGenre}: Props) => {
	const {data, error, isLoading} = useGenres();
	
	if (error.length > 0) {
		console.log("fetching genres: " + error);
	 	return null;
	}

	if (isLoading) {
		return <Spinner/>;
	}

	let sortedData = [...data];
	sortedData.sort((genre1, genre2) => {
		if (genre1.name < genre2.name) {
			return -1;
		}
		if (genre1.name > genre2.name) {
			return 1;
		}
		return 0;
	});

	return(
		<List>
			<Button onClick={()=>onSelectedGenre(null)}>reset filter</Button>
			{sortedData.map(genre => <ListItem key={genre.id} paddingY='4px'>
				<HStack>
					<Image objectFit='cover' boxSize='30px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
					<Button fontWeight={genre.id === selectedGenre?.id ? "bold" : ""} color={genre.id === selectedGenre?.id ? "lightblue" : ""} variant="link" onClick={()=>onSelectedGenre(genre)}>{genre.name}</Button>
				</HStack>
			</ListItem>)}
		</List>
	);
}

export default GenreList;