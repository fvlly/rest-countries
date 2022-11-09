import { Box, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";


const RegionFilter = ({region}) => {
  const [filterRegion, setRegionFilter] = useState("");

  useEffect(() => {
    const searchCountryByRegion = async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/region/${filterRegion}`
        );

        region(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (filterRegion) searchCountryByRegion();
  }, [filterRegion]);

  //change regions
  const handleRegionChange = (e) => {
    e.preventDefault();
    setRegionFilter(e.target.value);
    console.log(filterRegion);
  };

  return (
    <Box w={["50%",'50%','30%']} my={[4]}>
      <Select onChange={handleRegionChange} placeholder="Filter by region" size={["sm",'md','lg']}>
        <option   value="Africa">Africa</option>
        <option  value="America">America</option>
        <option  value="Asia">Asia</option>
        <option  value="Europe">Europe</option>
        <option  value="Oceania">Oceania</option>
      </Select>
    </Box>
  );
};

export default RegionFilter;
