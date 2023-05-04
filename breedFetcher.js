const request = require('request');
const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
    if (error) {
      console.log(`Failed to request: ${error}`);
      return;
    }
    
    const data = JSON.parse(body);
    const breed = data[0];
    
    if (!breed) {
      console.log(`Breed '${breedName}' not found`);
      return;
    }
    
    console.log(breed.description);
  });