import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatform'
import { HiChevronDown } from 'react-icons/hi';
import { Platform } from '../hooks/useGames';

interface Props {
    onselectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({onselectPlatform}: Props) => {
    const {data, error} = usePlatforms();
    if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<HiChevronDown />}>Platforms</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem key={platform.id} onClick={() => onselectPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector