import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import theme from '../theme';

const ColorModeSwitch = () => {

	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack>
			<Switch isChecked={colorMode === "dark"} id='theme-switch' colorScheme='green'onChange={toggleColorMode}/>
			<Text whiteSpace='nowrap'>Dark mode</Text>
		</HStack>
	)
}

export default ColorModeSwitch;