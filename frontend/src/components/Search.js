import React, { useState, useEffect } from "react";
import { Container, Grid, FormControl } from "@mui/material";

import FoodFilterContent from "../components/FoodCard/FoodFilterContent";

import axios from "axios";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("api/mainmenu");
      setSearchResults(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="my-3">Search Results</h1>
      <FormControl
        action="/searchresults"
        method="GET"
        type="search"
        placeholder="SEARCH"
        className="mr-2 my-5"
        aria-label="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Grid container spacing={1}>
        {searchResults
          .filter((value) => {
            if (searchResults === "") {
              return "value";
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })

          .map((result) => (
            <Grid item key={result._id} sm={12} md={6} lg={4} xl={3}>
              <FoodFilterContent data={result} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Search;
