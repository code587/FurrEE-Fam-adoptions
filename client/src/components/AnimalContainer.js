import React from 'react';
import { useState, useEffect } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import AnimalDetail from './AnimalDetail';
import API from '../utils/API';

const AnimalContainer = () => {
  // Set state for the search result and the search query
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');

  // When the search form is submitted, use the API.search method to search for the animals(s)
  const searchAnimals = (query) =>
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));

  // When the component loads, use the API.search method to render a default search result
  // The empty optional array [] will cause the hook to only run one time after the component loads
  // Refer to https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    searchAnimal('Dogs');
  }, []);

  // Handler for input changes to the search form
  const handleInputChange = (e) => setSearch(e.target.value);

  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchAnimal(search);
  };

  // Destructure the result object to make the code more readable, assign them to empty strings to start

  /* Type was originally title. Replaced. Commenting for historical reference while building site */

  const {
    Type = '',
    Breed = '',
  } = result;

  /* Fall back to default header if `Type` is undefined
  Does `Type` exist? If so, render the `AnimalDetail` card 
  If not, render a different header */

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card heading={Type || 'Search for your new family member'}>
            {Typee ? (
              <AnimalDetail
                type={Type}
                breed={Breed}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
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
