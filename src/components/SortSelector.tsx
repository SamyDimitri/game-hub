import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HiChevronDown } from 'react-icons/hi';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<HiChevronDown />}>
        Order by: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Data added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Data</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rateing</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector