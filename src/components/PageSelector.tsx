
import { Center, HStack, List, ListItem } from "@chakra-ui/react";

interface Props {
	
}

const PageSelector = () => {
	const a = ["1", "2", "3", "4"];
	return (
		<List alignItems="Center" display="flex">
			{a.map(value => <ListItem key={value}>{value}</ListItem>)}
		</List>
	);
}

export default PageSelector;