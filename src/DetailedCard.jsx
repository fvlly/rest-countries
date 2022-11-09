import { Box, Flex, Image,Text } from "@chakra-ui/react";

const DetailedCard = ({
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


  return (
    <Flex direction={['column','column','row']} gap={[2,2,4,8]}>
      <Image w={['300px','400px','55%']} objectFit={"cover"} src={src} alt={`${country} flag`}></Image>
      <Box px="4" pb={4}>
        <Text my={[4, 4, 4, 6]} fontWeight="bold" fontSize={['18px','18px','22px', '30px']}>
          {country}
        </Text>
        <Text fontSize={['18px','18px','22px', '30px']}>Population: {population}</Text>
        <Text  fontSize={['18px','18px','22px', '30px']} >Region: {region}</Text>
        <Text fontSize={['18px','18px','22px', '30px']} >{subRegion ? `sub Region: ${subRegion}` : ""}</Text>
        <Text fontSize={['18px','18px','22px', '30px']}>Capital: {capital}</Text>

        <Box my={4}>
          <Text fontSize={['18px','18px','22px', '30px']}>{domain ? `Top Level Domain: ${domain}` : ""}</Text>
          <Text fontSize={['18px','18px','22px', '30px']}>{currencies ? `currencies: ${currencies}` : ""}</Text>
          <Text fontSize={['18px','18px','22px', '30px']}>{languages ? `Languages: ${languages}` : ""}</Text>
        </Box>
        <Text fontSize={['18px','18px','22px', '30px']} my={[4, 4, 4, 6]} fontWeight="bold">
          {borderCountries ? `border Countries: ${borderCountries}` : ""}
        </Text>
      </Box>
    </Flex>
  );
};

export default DetailedCard;
