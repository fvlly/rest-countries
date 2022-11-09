// import { Link as RouterLink } from "react-router-dom";
import { Box, Image, Text, Link } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
const CountryCard = ({
  src,
  country,
  population,
  region,
  capital,
  subRegion,
  borderCountries,
  currencies,
  languages,
  domain,
}) => {
  const history = useHistory();

  return (
    // <Link as={RouterLink} to='/country/countryName'>
    <Box
      onClick={() => history.push(`/country/${country}`)}
      cursor="pointer"
      _hover={{
        transform:"scale(1.01)",
      }}
      w={["300px"]}
      outline="1px solid"
      mb={4}
      rounded="8"
    >
      <Box>
        <Image
          w="300px"
          h='180px'
          objectFit="cover"
          src={src}
          alt={`${country} flag`}
          borderTopRadius="8"
        ></Image>
      </Box>
      <Box px="4" pb={4}>
        <Text my={[4, 4, 4, 6]} fontWeight="bold">
          {country}
        </Text>
        <Text>Population: {population}</Text>
        <Text>Region: {region}</Text>
        <Text>{subRegion ? `sub Region: ${subRegion}` : ""}</Text>
        <Text>Capital: {capital}</Text>

        <Box my={4}>
          <Text>{domain ? `Top Level Domain: ${domain}` : ""}</Text>
          <Text>{currencies ? `currencies: ${currencies}` : ""}</Text>
          <Text>{languages ? `Languages: ${languages}` : ""}</Text>
        </Box>
        <Text my={[4, 4, 4, 6]} fontWeight="bold">
          {borderCountries ? `border Countries: ${borderCountries}` : ""}
        </Text>
      </Box>
    </Box>
    // </Link>
  );
};

export default CountryCard;
