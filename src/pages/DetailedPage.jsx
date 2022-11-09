import { useEffect, useState } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import axios from "axios";

import LinkButton from "../LinkButton";
import DetailedCard from "../DetailedCard";

const DetailedPage = (props) => {
  const [country, setCountry] = useState(props.match.params.countryName);
  const [countryDetail, setCountryDetail] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${country}`
        );

        console.log(data);
        setCountryDetail(data);
        console.log("cD", countryDetail);
        setIsLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (country) getCountry();
  }, [country]);

  const renderCountry = () => {
    if (isLoaded) {
      const [country] = countryDetail;
      const {
        name,
        population,
        region,
        capital,
        flags,
        currencies,
        subregion,
        borders,
        languages,
        tld,
      } = country;
      
    

      const borderCountires = borders ? borders.join(",") : "";
      const topLevelDomain = tld ? tld.join("") : "";
      const currency = Object.values(currencies)[0].name
      console.log(currency);
      const  language  = Object.values(languages)[0]
      console.log(language);
      const { common } = name;
      const { svg } = flags;
      return (
        <DetailedCard
          country={common}
          src={svg}
          population={population}
          capital={capital}
          region={region}
          subRegion={subregion}
          domain={topLevelDomain}
            currencies={currency}
          borderCountries={borderCountires}
          languages={language}
        />
      );
    }

    return <Text>Loading!!!</Text>;
  };

  return (
    <Container maxWidth={"98%"}>
      <Box py={[4]}>
        <LinkButton
          width={["140px"]}
          height={["40px"]}
          to="/"
          text={"back"}
          rounded="8"
        >
          <ArrowBackIcon w={6} h={6} />
          <Text>Back</Text>
        </LinkButton>
      </Box>
      {renderCountry()}
    </Container>
  );
};

export default DetailedPage;
