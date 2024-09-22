import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import usePlatforms from "../hooks/usePlateforms"
import { Platform } from "../hooks/useGames";

interface Props {
	selectedPlatform: Platform | null;
	onSelectPlatform: (Plateform: Platform | null) => void;
}

const PlateformSelector = ({selectedPlatform, onSelectPlatform}: Props) => {

	const {data, error} = usePlatforms();

	if (error.length > 0 ) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key = {platform.id}>{platform.slug}</MenuItem> )}
			</MenuList>
		</Menu>
	)
}

export default PlateformSelector;