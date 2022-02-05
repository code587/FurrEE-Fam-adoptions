import React from "react";
import { useState, useEffect } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import AnimalDetail from "./AnimalDetail";
import API from "../../utils/API";

const AnimalContainer = () => {
  // Set state for the search result and the search query
  const [images, setimages] = useState([]);
  const [search, setSearch] = useState("");

  // When the search form is submitted, use the API.search method to search for the Animal(s)
  const searchAnimal = (query) =>
    API.search(query)
      .then((res) => {
        setimages(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => console.log(err));

  // When the component loads, use the API.search method to render a default search result
  // The empty optional array [] will cause the hook to only run one time after the component loads
  // Refer to https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    searchAnimal("greyhound");
  }, []);

  // Handler for input changes to the search form
  const handleInputChange = (e) => setSearch(e.target.value);

  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchAnimal(search);
  };

  // Destructure the result object to make the code more readable, assign them to empty strings to start

  /* Fall back to default header if `Title` is undefined
  Does `Title` exist? If so, render the `AnimalDetail` card 
  If not, render a different header */

  return (
    <Container>
      <Row>
        <Col size="md-8">
          {" "}
          {images.map((image) => {
            
            return <Card heading={image || "Search for a specific breed to begin"}>
              {image ? (
                <AnimalDetail image={image} />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>;
          })}
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AnimalContainer;
