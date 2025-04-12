import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropedImageUrl from "../services/image-url";

const skeletonList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletonList.map(() => (
            <SkeletonText paddingY="8px" />
        ))}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
