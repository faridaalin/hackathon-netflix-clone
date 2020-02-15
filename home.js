const tvShowUrl = "http://api.tvmaze.com/schedule/";

fetch(tvShowUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    displayShows(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function displayShows(json) {
  const tvShows = json;

  const mainContainer = document.querySelector("main");

  tvShows.forEach(tvShow => {

    mainContainer.innerHTML += `<div class="card">
    <img src="${tvShow.show.image.medium}" alt="">
    <div class="container">
      <h3>${tvShow.show.name}</h3>
      <button><a class="btn details" href="detailpage.html?id=${tvShow.show.id}">More info</a></button>
    </div>
  </div>`;

  });

}
