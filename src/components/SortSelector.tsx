import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	selectedSortOrder: string
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder}: Props) => {

	const sortOrders = [
		{value: '', label: 'Relevance'},
		{value: '-added', label: 'Added date'},
		{value: 'name', label: 'Name'},
		{value: '-release', label: 'Release date'},
		{value: '-metacritic', label: 'Popularity'},
		{value: '-rate', label: 'Average rating'},
	]
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{"Ordered by " + sortOrders.find(currentSortOrder => currentSortOrder.value === selectedSortOrder)?.label}
			</MenuButton>
			<MenuList>
				{sortOrders.map(orderCriteria => <MenuItem onClick={() => onSelectSortOrder(orderCriteria.value) } key={orderCriteria.label} value={orderCriteria.value}>{orderCriteria.label}</MenuItem>)}
			</MenuList>
		</Menu>
	)
}

export default SortSelector;