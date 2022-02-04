// import { Client } from "@petfinder/petfinder-js";

// const client = new Client({apiKey: "4VyhmJW4VDEsM6g5Aswwug2reNae3KsdUK5PsREiPSjRH1oT0g", secret: "yqITARCYOmIaRxcJwr4b76DCuX3qSg4sb0xgDYS1"});

// client.animal.search()
//     .then(function (response) {
//         // Do something with `response.data.animals`
//     })
//     .catch(function (error) {
//         // Handle the error
//     });


import axios from 'axios';

const search = async (query) =>
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

export default { search };



    // Save for later
// const searchMovie = (query) =>
// API.search(query)
//   .then((res) => setResult(res.data))
//   .catch((err) => console.log(err));