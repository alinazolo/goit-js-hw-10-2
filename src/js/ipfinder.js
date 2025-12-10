const refs = {
       form: document.querySelector('.js-location-form'),
       container: document.querySelector('.js-ip-form'),
}


function fetchUsers(user) {
    const baseUrl = "https://bin-ip-checker.p.rapidapi.com";
    const endPoint = "/ip-lookup";
    const params = new URLSearchParams({
ip: user,
    });
    const url = `${baseUrl}${endPoint}?${params}`;
    const headers = {
        'x-rapidapi-key': '87997b3a6amsh394cadaffd43860p17ccb0jsnf1582bd421eb',
		'x-rapidapi-host': 'bin-ip-checker.p.rapidapi.com'
    };
    return fetch(url, {headers}).then(res => res.json());
    
}

function userTemplate(data) {
    const { IP, country } = data;

    return `
    <div class="info-item">
      <img class="flag" src="${IP.flag}" alt="${IP.country}" />
      <span class="info-label">Country:</span>
      <span class="info-value">${IP.country}</span>
    </div>
    <div class="info-item">
      <span class="info-label">IP Address:</span>
      <span class="info-value">${IP.IP}</span>
    </div>
    <div class="info-item">
      <span class="info-label">City:</span>
      <span class="info-value">${IP.city}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Timezone:</span>
      <span class="info-value">${IP.time_zone}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Currency:</span>
      <span class="info-value">${country.currency_name}</span>
    </div>
    <div class="info-item">
      <span class="info-label">Language:</span>
      <span class="info-value">${country.language}</span>
    </div>
    `;
}

refs.form.addEventListener('submit', event => {
   event.preventDefault();
    const IPname = event.target.elements.userip.value;

    fetchUsers(IPname)
        .then(res => {
            const markup = userTemplate(res);
            refs.container.innerHTML = ''; // Clear previous results
            refs.container.insertAdjacentHTML('afterbegin', markup);
        })
        .catch(err => console.error('API error:', err));

    event.target.reset();
});