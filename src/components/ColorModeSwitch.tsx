import { HStack, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  // This will choose the sun or moon icon depending on the theme
  const IconComponent = useColorModeValue(FaSun, FaMoon);

  return (
    <HStack spacing={4}>
      {/* Icon for Sun and Moon */}
      <Icon
        as={IconComponent} // Show sun or moon
        boxSize={6} // Size of the icon
        transition="transform 0.3s ease" // Smooth animation
        transform={colorMode === "dark" ? "rotate(360deg)" : "rotate(0deg)"} // Spin effect
        onClick={toggleColorMode} // Toggle color mode on click
        cursor="pointer" // Pointer cursor on hover
      />
    </HStack>
  );
};

export default ColorModeSwitch;
