import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCropedImageUrl from "../services/image-url";

interface Props {
  onselectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const skeletonList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const GenreList = ({ onselectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;

  return (
    <>
    <Heading fontSize='3xl' marginBottom={3} marginTop={1}>Genres</Heading>
    <List>
      {isLoading &&
        skeletonList.map((element) => (
          <SkeletonText key={element} paddingY="8px" />
        ))}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              objectFit="cover"
              boxSize="32px"
              borderRadius={8}
              src={getCropedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onselectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
