import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
	<Grid gridTemplate={
		{
			base: `"nav" "main"`,
			lg: `"nav nav" "aside main"`
		}
	}>
		<GridItem area="nav" bgColor="coral">Nav</GridItem>
		<GridItem area="nav" bgColor="green">Nav</GridItem>
		<Show above='lg'>
			<GridItem area="aside" bgColor="blue">Aside</GridItem>
		</Show>
		<GridItem area="main" bgColor="lightblue">Main</GridItem>
	</Grid>
  )
}

export default App
