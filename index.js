const movieTitles = ["Папины дочки", "Молодежка", "Пес"];

const moviePosters = ["covers/PD.jpg", "covers/M.jpg", "covers/PES.jpg"];

const movieList = document.getElementById("movieList");
const movieName = document.getElementById("movieName");
const moviePoster = document.getElementById("moviePoster");
const addMovie = document.getElementById("addMovie");

function renderMovies() {
  movieList.innerHTML = "";

  movieTitles.forEach((movieTitle, index) => {
    const item = document.createElement("li");

    const poster = document.createElement("img");
    poster.src = moviePosters[index];
    poster.alt = "";
    poster.width = 100;

    const title = document.createElement("span");
    title.textContent = movieTitle;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Удалить";

    removeButton.addEventListener("click", function () {
      movieTitles.splice(index, 1);
      moviePosters.splice(index, 1);

      renderMovies();
    });

    item.append(poster, title, removeButton);
    movieList.append(item);
  });
}
