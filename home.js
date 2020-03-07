const tvShowUrl = "http://api.tvmaze.com/shows";

fetch(tvShowUrl)
  .then(response => response.json())
  .then(json => displayShows(json))
  .catch(error => console.log(error));

const displayShows = json => {
  const cards = document.querySelector(".cards");

  json.forEach(show => {
    cards.innerHTML +=
    `<div class="card-item">
    <figure>
    <img class="image" src="${show.image.medium}" alt="${show.name}">
    <button class="btn" id="btn"><a href="detailpage.html?id=${show.id}">View</a></button>
    </figure></div>`;
  });

  const searchBtn = document.querySelector(".search-btn");
  searchBtn.addEventListener("click", showSearch);

  function showSearch(event) {
    const searchInput = document.querySelector("#searchInput");
    const searchInputValue = searchInput.value.toLowerCase().trim();
    let filteredSearch = "";

    filteredSearch = json.filter(show => {
      if (show.name.toLowerCase().includes(searchInputValue)) {
        return show.name.toLowerCase();
      }
    });

    const h1 = document.querySelector("h1");
    h1.innerHTML = `We found ${filteredSearch.length} shows that includes <strong>"${searchInputValue}"</strong>`;

    ul.innerHTML = "";
    displayShows(filteredSearch);
  }
};
