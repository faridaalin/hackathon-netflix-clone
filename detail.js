const params = new URLSearchParams(document.location.search);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const detailURl = `http://api.tvmaze.com/shows/${id}`;

fetch(detailURl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    showDetails(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function showDetails(json) {
  console.dir(json);

  const showImage = document.querySelector(".detail-img");
  showImage.src = json.image.medium;
  showImage.alt = json.name;

  const showName = document.querySelector("h3");
  showName.innerHTML = json.name;

  const summary = document.querySelector(".summary");
  summary.innerHTML = json.summary;

  const language = document.querySelector(".language");
  language.innerHTML = json.language;

  const genres = document.querySelector(".genres");
  genres.innerHTML = json.genres;

  const schedule = document.querySelector(".schedule");
  schedule.innerHTML += json.schedule.time;
  schedule.innerHTML += json.schedule.days;
}

const accordion = document.querySelector(".accordion-menu");
accordion.addEventListener("click", showShedule);

function showShedule(event) {
  accordion.nextElementSibling.classList.toggle('blockInformation')



}