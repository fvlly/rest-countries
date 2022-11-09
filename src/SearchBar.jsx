import { Box, FormControl, Input, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ setCountry }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  //get a specific country
  useEffect(() => {
    const searchCountry = async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${debouncedSearchTerm}`
        );

        console.log(data);
        setCountry(data)
      } catch (error) {
        console.log(error.message);
      }
    };

    if (debouncedSearchTerm) searchCountry();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 700);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  return (
    <Box
      display="flex"
      alignItems="center"
      gap="2"
      px={[4, 4, 6]}
      outline="1px solid"
      rounded={6}
      w={['full','full','50%']}
    >
      <Search2Icon w={[4,6,6]} h={[4,6,6]} />
      <FormControl>
        <Input
        _hover={{
          borderColor: 'none',
        }}
          value={searchTerm}
          onChange={(e) => {
            e.preventDefault();
            const { value } = e.target;
            setSearchTerm(value);
          }}
          placeholder="Search for a country"
          border={"none"}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
