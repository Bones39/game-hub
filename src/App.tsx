import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/NavBar";
import GameGrid from './components/GameGrid';

function App() {

  return (
	<Grid gridTemplate={
		{
			base: `"nav" "main"`,
			lg: `"nav nav" "aside main"`
		}
	}>
		<GridItem area="nav">
			<NavBar/>
		</GridItem>
		<Show above='lg'>
			<GridItem area="aside" bgColor="blue">Aside</GridItem>
		</Show>
		<GridItem area="main">
			<GameGrid/>
		</GridItem>
	</Grid>
  )
}

export default App
