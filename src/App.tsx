import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/NavBar";
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PageSelector from './components/PageSelector';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

export interface GameQueryFromApp {
	genre: Genre | null;
	searchInput: string;
	page: Number;
}
function App() {

	const [GameQueryFromApp, setGameQueryFromApp] = useState<GameQueryFromApp>({} as GameQueryFromApp);

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
			<NavBar onSearch={(searchInput) => setGameQueryFromApp({...GameQueryFromApp, searchInput})}/>
		</GridItem>
		<Show above='lg'>
			<GridItem area="aside" paddingX='20px'>
				<GenreList selectedGenre={GameQueryFromApp.genre} onSelectedGenre={(genre) => setGameQueryFromApp({...GameQueryFromApp, genre})}/>
			</GridItem>
		</Show>
		<GridItem area="main">
			<GameGrid gameQuery={GameQueryFromApp}/>
			<PageSelector selectedPage={GameQueryFromApp.page || 1} onSelectPage={(page) => setGameQueryFromApp({...GameQueryFromApp, page})}></PageSelector>
		</GridItem>
	</Grid>
  )
}

export default App
