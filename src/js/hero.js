const refs = {
    form: document.querySelector('.js-hero-form'),
    container: document.querySelector('.js-hero-container'),
}

// Request
function fetchHero(heroName) {
    const baseUrl = "https://superhero-search.p.rapidapi.com";
    const endPoint = "/api/";
    const params = new URLSearchParams({
        hero: heroName,
    });
    const url = `${baseUrl}${endPoint}?${params}`;
    const headers = {
        'x-rapidapi-key': '87997b3a6amsh394cadaffd43860p17ccb0jsnf1582bd421eb',
		'x-rapidapi-host': 'superhero-search.p.rapidapi.com'
    };
    return fetch(url, { headers }).then(res => res.json());
}

function heroTemplate(hero) {
  const { appearance, biography, images, name, powerstats } = hero;
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${biography.fullName}</p>
      <p class="hero-bio">Publisher - ${biography.publisher}</p>
      <p class="hero-bio">Alignment - ${biography.alignment}</p>
      <p class="hero-bio">Gender - ${appearance.gender}</p>
      <p class="hero-bio">Race - ${appearance.race}</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: ${powerstats.power}</span>
      <span>Strength: ${powerstats.strength}</span>
      <span>Speed: ${powerstats.speed}</span>
      <span>Combat: ${powerstats.combat}</span>
    </div>
  </div>
</div>`;
}

refs.form.addEventListener('submit', event => {
    event.preventDefault();
    const heroName = event.target.elements.query.value;
    fetchHero(heroName).then(res => {
        const markup = heroTemplate(res);
        refs.container.insertAdjacentHTML('afterbegin', markup);
    });
    event.target.reset();
});