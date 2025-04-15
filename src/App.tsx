import { useState } from "react";
import { GridItem, Grid, Show, Flex, Box, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchtext: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Flex justify="space-between" align="center" paddingX={4}>
          <NavBar onSearch={searchtext => setGameQuery({...gameQuery, searchtext})}/>
          {/* Hamburger visible only on mobile */}
          <Show below="lg">
            <IconButton
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Open genre menu"
              onClick={onOpen}
            />
          </Show>
        </Flex>
      </GridItem>

      {/* Desktop GenreList */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onselectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>

      {/* Mobile Drawer GenreList */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>
          <DrawerBody>
            <GenreList
              selectedGenre={gameQuery.genre}
              onselectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
                onClose();  // Close drawer after selection!
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onselectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
