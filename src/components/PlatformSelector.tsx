import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import usePlatforms from "../hooks/usePlateforms"


const PlateformSelector = () => {

	const {data, error} = usePlatforms();

	if (error.length > 0 ) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				Plateform
			</MenuButton>
			<MenuList>
				{data.map(platform => <MenuItem key = {platform.id}>{platform.slug}</MenuItem> )}
			</MenuList>
		</Menu>
	)
}

export default PlateformSelector;