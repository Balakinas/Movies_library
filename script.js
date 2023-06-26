let numberOfFilms;

function start() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Hom much movies did you watch?", "");
  }
}

// start();

personalMovieDB = {
  "count": +numberOfFilms,
  "movies": {},
  "actors": {},
  "genres": [],
  "privat": false
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довльно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман!");
  }
}

// detectPersonalLevel();

function rememberMyMovies () {
  for (i = 0; i <= 1; i++) {
    do {
       movie = prompt(`movie ${i + 1} ?`, "");
    } while (!movie || movie.length > 50);
    movieRate = prompt("how would you rate it?", "");
    personalMovieDB.movies[movie] = movieRate;
  }
}

// rememberMyMovies();

function writeYourGenres () {
  for (let i = 1; i < 4; i++){
     let genre = prompt(`Type your favourite genre ${i} `, "");
     personalMovieDB.genres.push(genre);
  }
}

writeYourGenres();

function showMyDB () {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

// showMyDB();

console.log(personalMovieDB);




