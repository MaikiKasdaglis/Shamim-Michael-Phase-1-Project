document.addEventListener("DOMContentLoaded", () => {
  fetch(` http://localhost:3000/current-stored-dreams`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((dream) => {
        pastDreamList(dream);
        dreamImageBar(dream);
      });
      selectedDreamDetails(data[0]);
    });
});

let pastDreams = document.querySelector(`.stored-dreams`);
function pastDreamList(dream) {
  let dreamTitle = document.createElement("h3");
  let dreamTheme = document.createElement("h5");
  let dreamRating = document.createElement("h5");
  dreamTitle.classList.add("dream-title");
  dreamTheme.classList.add("dream-theme");
  dreamRating.classList.add("dream-rating");

  dreamTitle.innerText = `Title: ${dream.title}`;
  dreamTheme.innerText = `Theme: ${dream.theme}`;
  dreamRating.innerText = `Rating: ${dream.rating}`;

  dreamTitle.addEventListener("click", (e) => {
    console.log(`title clicker works`);
    selectedDreamDetails(dream);
  });
  let dreamDiv = document.createElement("div");
  dreamDiv.classList.add("form-inputs");
  dreamDiv.classList.add("dream-div");
  dreamDiv.append(dreamTitle, dreamTheme, dreamRating);
  pastDreams.append(dreamDiv);
}

let selectedDream = document.querySelector(".selected-dream");

function selectedDreamDetails(dream) {
  removeAllChildNodes(selectedDream);
  let title = document.createElement("h3");
  let theme = document.createElement("h5");
  let rating = document.createElement("h5");
  let details = document.createElement("p");
  let image = document.createElement("img");
  title.id = "selected-title";
  theme.id = "selected-theme";
  rating.id = "selected-rating";
  details.id = "selected-details";
  image.id = "selected-image";

  //titleTitle.innerText = dream.title
  title.innerText = `Title: ${dream.title}`;
  theme.innerText = ` Theme: ${dream.theme}`;
  rating.innerText = `Rating: ${dream.rating}`;
  details.innerText = `Details: ${dream.details}`;
  image.src = dream.image;

  //selectedDream.style.backgroundImage = `url(${dream.image})`
  selectedImageDiv = document.createElement("div");
  selectedImageDiv.id = "selected-image-div";
  selectedImageDiv.append(image);
  selectedDream.append(title, theme, rating, details, selectedImageDiv);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//===========PHOTO BOX STUFF=======================
let photoBox = document.querySelector(".image-wrapper");
function dreamImageBar(dream) {
  let dreamImage = document.createElement("img");
  dreamImage.classList.add("display-image");
  dreamImage.src = dream.image;

  //=======mouse events ================
  dreamImage.addEventListener("mouseover", (e) => {
    photoClassChanger(dreamImage);
  });
  dreamImage.addEventListener("mouseout", (e) => {
    photoChangBack(dreamImage);
  });
  photoBox.appendChild(dreamImage);
}

function photoClassChanger(element) {
  element.classList.remove("display-image");
  element.classList.add("display-image-larger");
}
function photoChangBack(element) {
  element.classList.remove("display-image-larger");
  element.classList.add("display-image");
}

//========Dream form stuff ===============

let button = document.querySelector("#text-form");
let dreamDetails = document.querySelector("#dream-text-area");
let titleEntry = document.querySelector("#title-entry");
let themeEntry = document.querySelector("#theme-entry");
let ratingEntry = document.querySelector("#rating-entry");
let imageEntry = document.querySelector("#image-entry");

let dreamObject = {
  title: "",
  rating: "",
  theme: "",
  details: "",
  image: "",
};
button.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(dreamDetails.value);
  console.log(titleEntry.value);
  dreamObject.details = dreamDetails.value;
  dreamObject.title = titleEntry.value;
  dreamObject.rating = ratingEntry.value;
  dreamObject.theme = themeEntry.value;
  dreamObject.image = imageEntry.value;
  console.log(dreamObject);
  e.target.reset();
  pastDreamList(dreamObject);
  postFunction(dreamObject);
  dreamImageBar(dreamObject);
  console.log(dreamObject);
});

function postFunction(dreamObject) {
  fetch(`http://localhost:3000/current-stored-dreams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dreamObject),
  });
}
