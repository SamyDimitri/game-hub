import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width={"100%"}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={12}
          placeholder="Search games..."
          variant="filled"
          width="100%"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
