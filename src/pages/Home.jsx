import React, { useEffect, useState } from "react";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";

import CountryCard from "../CountryCard";
import RegionFilter from "../RegionFilter";
import SearchBar from "../SearchBar";

const Home = () => {
  const [countries, setCountries] = useState("all");
  const [listOfCountries, setListOfCountries] = useState([]);

  //getting list of  countries
  useEffect(() => {
    const searchCountry = async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/${countries}`
        );

        setListOfCountries(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (countries) searchCountry();
  }, [countries]);

  return (
    <Box>
      <Container maxW={["95%"]}>
        <Box py={4}
          display={"flex"}
          flexDirection={['column','column','row']}
          justifyContent="space-between"
        >
          <SearchBar setCountry={setListOfCountries} />
          <RegionFilter region={setListOfCountries} />
        </Box>
        <SimpleGrid minChildWidth={"300px"} spacing="20px">
          {listOfCountries.map((country) => {
            const { name, population, region, capital, flags } = country;
            const { common } = name;
            const { svg } = flags;
            return (
              <CountryCard
                key={common}
                country={common}
                src={svg}
                population={population}
                capital={capital}
                region={region}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;
