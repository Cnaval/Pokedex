const CallToApi = () => fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .catch(error => error);

export default CallToApi;
