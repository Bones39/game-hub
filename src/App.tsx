import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/NavBar";
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

function App() {

	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [searchInputText, setSearchInputText] = useState("");

  return (
	<Grid templateAreas={
		{
			base: `"nav" "main"`,
			lg: `"nav nav" "aside main"`
		}
	}
	templateColumns={
		{
			base: '1fr',
			lg: '250px 1fr' 
		}
	}
	>
		<GridItem area="nav">
			<NavBar onSearch={(searchText) => setSearchInputText(searchText)}/>
		</GridItem>
		<Show above='lg'>
			<GridItem area="aside" paddingX='20px'>
				<GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
			</GridItem>
		</Show>
		<GridItem area="main">
			<GameGrid selectedGenre={selectedGenre} searchInputText={searchInputText}/>
		</GridItem>
	</Grid>
  )
}

export default App
