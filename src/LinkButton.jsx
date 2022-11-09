import { Link, Icon, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LinkButton = ({children,
  to,
  borderColor,
  color,
  bgColor,
  rounded,
  width,
  height,
  fontSize,
}) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      gap={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={width}
      h={height}
      fontSize={fontSize}
      px={2}
      border="1px solid"
      fontWeight="bold"
      color={color}
      borderColor={borderColor}
      bgColor={bgColor}
      rounded={rounded}
      //   target="_blank"
      _hover={{ textDecoration: "none", transform: "scale(1.01)" }}
    >
    {children}
    </Link>
  );
};

export default LinkButton;
