import { Box, HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <Box flex='1'>
      <SearchInput onSearch={onSearch}/>
      </Box>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar