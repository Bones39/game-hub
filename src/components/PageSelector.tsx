
import { Button, List, ListItem } from "@chakra-ui/react";

interface Props {
	onSelectPage: (value: number) => void;
	selectedPage: Number;
}

const PageSelector = ({selectedPage, onSelectPage}: Props) => {
	const a = ["1", "2", "3", "4"];
	return (
		<List display="flex" justifyContent="center">
			{a.map(value => <ListItem key={value}>
				<Button bgColor={parseInt(value) === selectedPage? "LightGray" : ""} color={parseInt(value) === selectedPage? "SlateGray" : ""} onClick={() => onSelectPage(parseInt(value))}>{value}</Button>
			</ListItem>)}
		</List>
	);
}

export default PageSelector;