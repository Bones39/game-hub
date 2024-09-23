import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
	return (
		<InputGroup>
			<InputLeftElement pointerEvents='none'>
				<SearchIcon />
			</InputLeftElement>
			<Input borderRadius={20} placeholder="Search games..."></Input>
		</InputGroup>
	)
}

export default SearchInput;