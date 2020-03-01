const tvShowUrl = "http://api.tvmaze.com/shows";

fetch(tvShowUrl)
  .then(response => response.json())
  .then(json => displayShows(json))
  .catch(error => console.log(error));

const displayShows = (json) => {
  const ul = document.querySelector(".cards");

  json.forEach(show => {
    ul.innerHTML += `<li class="cards_item">
   <div class="card">

     <div class="card_image">
     <img src="${show.image.medium}" alt="${show.name}">
     </div>

     <div class="card_content">
       <h2 class="card_title">${show.name}</h2>
       <p class="card_text"></p>
       <button class="btn card_btn details"><a href="detailpage.html?id=${show.id}">Read More</a></button>
     </div>

   </div>
 </li>`
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

    const h1 = document.querySelector('h1');
    h1.innerHTML = `We found ${filteredSearch.length} shows that includes <strong>"${searchInputValue}"</strong>`;

    ul.innerHTML = "";
    displayShows(filteredSearch);
  }
}
