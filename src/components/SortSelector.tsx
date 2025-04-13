import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
    
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Data added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release Data" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rateing" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<HiChevronDown />}>
        Order by: {currentSortOrder?.lable || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
};

export default SortSelector;
