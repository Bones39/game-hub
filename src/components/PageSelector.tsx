
import { Button, List, ListItem } from "@chakra-ui/react";

interface Props {
	onSelectPage: (value: number) => void;
	selectedPage: Number;
}

const PageSelector = ({selectedPage, onSelectPage}: Props) => {
	const a = ["1", "2", "3", "4"];
	return (
		<List display="flex" justifyContent="space-between">
			{a.map(value => <ListItem key={value}>
				<Button onClick={() => onSelectPage(parseInt(value))}>{value}</Button>
			</ListItem>)}
		</List>
	);
}

export default PageSelector;