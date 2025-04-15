import {
  HStack,
  Switch,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  // this will choose sun or moon depending on the theme
  const IconComponent = useColorModeValue(FaSun, FaMoon);

  return (
    <HStack spacing={4}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        sx={{
          ".chakra-switch__track": {
            bg: "gray.300", // Light gray when OFF
            _checked: {
              bg: "blue.300", // Bright blue when ON
            },
          },
          ".chakra-switch__thumb": {
            bg: "white", // White circle (optional)
          },
        }}
      />
      <Icon
        as={IconComponent} // show sun or moon
        boxSize={6} // size of the icon
        transition="transform 0.3s ease" // smooth animation
        transform={colorMode === "dark" ? "rotate(360deg)" : "rotate(0deg)"} // spin
      />
    </HStack>
  );
};

export default ColorModeSwitch;
