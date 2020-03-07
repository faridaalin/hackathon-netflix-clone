const params = new URLSearchParams(document.location.search);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}
const corsAllow = `https://cors-anywhere.herokuapp.com/`;
const SHOW_URL = `${corsAllow}http://api.tvmaze.com/shows/${id}`;
const EPISODES_URL = `${corsAllow}http://api.tvmaze.com/shows/${id}/episodes`;
const SEASONS_URL = `${corsAllow}http://api.tvmaze.com/shows/${id}/seasons`;
const CAST_URL = `${corsAllow}http://api.tvmaze.com/shows/${id}/cast`;

fetch(SHOW_URL)
  .then(response => response.json())
  .then(json => showDetails(json))
  .catch(error => console.log(error));

fetch(CAST_URL)
  .then(response => response.json())
  .then(json => showCast(json))
  .catch(error => console.log(error));

fetch(SEASONS_URL)
  .then(response => response.json())
  .then(json => showSeason(json))
  .catch(error => console.log(error));

fetch(EPISODES_URL)
  .then(response => response.json())
  .then(json => showEpisodes(json))
  .catch(error => console.log(error));

function showDetails(detail) {
  console.dir(detail);

  let backgroundImage = document.querySelector(".background-image");
  backgroundImage.style.backgroundImage = `url(${detail.image.original})`;

  const title = document.querySelector(".title");
  title.innerHTML = detail.name;

  const description = document.querySelector(".subtitle");
  description.innerHTML = detail.summary;

  const schedule = document.querySelector("#schedule > div");
  schedule.innerHTML = `<p>${detail.schedule.time}</p><p>${detail.schedule.days}</p>`;
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
  button.addEventListener("click", showTabContent);

  function showTabContent(event) {
    removeActiveClass(tabButtons);
    const tabDataValue = button.dataset.target;

    carouselContent.forEach(carouselItem => {
      carouselItem.style.display = "none";
      const carouselId = carouselItem.id;

      if (tabDataValue === carouselId) {
        carouselItem.style.display = "block";
        event.target.parentNode.classList.add("is-active");
      } else {
        carouselItem.style.display = "none";
      }
    });
  }
});

function removeActiveClass(buttons) {
  buttons.forEach(removeActive => {
    removeActive.className = removeActive.className.replace("is-active", "");
  });
}

function showSeason(seasons) {
  console.dir(seasons);

  seasons.forEach(season => {
    let seasonImage = "";

    const carouselInner = document.querySelector("#seasons");
    const carrSeasons = carouselInner.querySelector("div");

    season.image
      ? (seasonImage = season.image.medium)
      : (seasonImage = "https://via.placeholder.com/130x180.jpg");

    carrSeasons.innerHTML += `<img src="${seasonImage}" alt="">`;
  });
}

function showEpisodes(episodes) {
  episodes.forEach(episode => {
    console.dir(episode)
    let epsiodeImage;

    episode.image
      ? (epsiodeImage = episode.image.medium)
      : (epsiodeImage = "https://bulma.io/images/placeholders/1280x960.png");

    const carouselInner = document.querySelector("#episodes");
    const carrEpisodes = carouselInner.querySelector("div");
    carrEpisodes.innerHTML += `<figure><img src="${epsiodeImage}" alt="${episode.name}">
  <p class="episodes-details">s${episode.season} e${episode.number}</p></figure>`;
  });
}
