// https://pokeapi.co/api/v2/pokemon/pikachu

document.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetchButton');

  fetchBtn.addEventListener('click', fetchData);

  async function fetchData() {
    try {
      const pokemonName = document
        .getElementById('pokemonName')
        .value.toLowerCase();

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      if (!response.ok) {
        throw new Error('Could not fetch resourse.');
      }

      const data = await response.json();
      console.log(data.name);
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById('pokemonSprite');

      imgElement.src = pokemonSprite;
      imgElement.style.display = 'block';
    } catch (error) {
      console.error(error);
    }
  }
});
