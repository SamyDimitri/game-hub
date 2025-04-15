import { HStack, Image, Show, IconButton } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  onSearch: (searchText: string) => void;
  onOpenMenu: () => void;
}

const NavBar = ({ onSearch, onOpenMenu }: Props) => {
  return (
    <HStack padding="10px" spacing={4} alignItems="center">
      <Image src={logo} boxSize="38px" />
      
        <SearchInput onSearch={onSearch} />

      <ColorModeSwitch />

      <Show below="lg">
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          variant="outline"
          onClick={onOpenMenu}
        />
      </Show>
    </HStack>
  );
};

export default NavBar;
