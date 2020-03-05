const params = new URLSearchParams(document.location.search);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const SHOW_URL = `http://api.tvmaze.com/shows/${id}`;
const EPISODES_URL = `http://api.tvmaze.com/shows/${id}/episodes`;
const SEASONS_URL = `http://api.tvmaze.com/shows/${id}/seasons`;
const CAST_URL = `http://api.tvmaze.com/shows/${id}/cast`;

fetch(SHOW_URL)
  .then(response => response.json())
  .then(json => showDetails(json))
  .catch(error => console.log(error));

fetch(CAST_URL)
  .then(response => response.json())
  .then(json => showCast(json))
  .catch(error => console.log(error));

function showDetails(detail) {

  let backgroundImage = document.querySelector(".background-image");
  backgroundImage.style.backgroundImage = `url(${detail.image.original})`;

  const title = document.querySelector(".title");
  title.innerHTML = detail.name;

  const description = document.querySelector(".subtitle");
  description.innerHTML = detail.summary;
}










function showCast(cast) {
  let actorsResult = [];
  const castNames = document.querySelector(".cast-names");

  cast.forEach(element => {
    actorsResult.push(element.person.name);
  });

  actorsResult = actorsResult.slice(0, 3).join(", ");
  castNames.innerHTML += `${actorsResult}`;
}

const carouselContent = document.querySelectorAll(".carousel-content");
const tabButtons = document.querySelectorAll(".tabs-item");

tabButtons.forEach(button => {
  button.addEventListener("click", showTabContet);

  function showTabContet(event) {
    tabButtons.forEach(removeActive => {
      removeActive.className = removeActive.className.replace("is-active", "");
    });

    const tabDataValue = button.dataset.target;

    carouselContent.forEach(content => {
      content.style.display = "none";
      const carouselId = content.id;

      if (tabDataValue === carouselId) {
        content.style.display = "block";
        event.target.parentNode.classList.add("is-active");
      } else {
        content.style.display = "none";
      }
    });
  }
});










fetch(SEASONS_URL)
  .then(response => response.json())
  .then(json => showSeason(json))
  .catch(error => console.log(error));

  function showSeason(season) {
    console.log(season)
    season.forEach(seasonImage => {
      const img = seasonImage.image.medium
      //console.dir(seasonImage.image.medium)

      const carouselInner = document.querySelector('#seasons')
      const carrSeasons = carouselInner.querySelector('div')
      carrSeasons.innerHTML += `<img src="${img}" alt="">`
    });


  }
