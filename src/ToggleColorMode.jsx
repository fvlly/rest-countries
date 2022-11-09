import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex cursor="pointer" alignItems={"center"} gap={1}>
      {colorMode === "light" ? (
        <MoonIcon onClick={toggleColorMode} />
      ) : (
        <SunIcon onClick={toggleColorMode} />
      )}
      <Text>{colorMode === "light" ? "Dark Mode" : "Light Mode"}</Text>
    </Flex>
  );
};

export default ToggleColorMode;
