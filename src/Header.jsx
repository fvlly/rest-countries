import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import ToggleColorMode from "./ToggleColorMode";

const Header = () => {
  return (
    <Flex px={[8,10,12]} py="30px" alignItems="center" justify="space-between">
      <Link fontWeight={'bold'}  as={RouterLink} to="/" _hover={{
        textDecoration: 'none'
      }}>
        Where in the world?
      </Link>

      <ToggleColorMode />
    </Flex>
  );
};

export default Header;

