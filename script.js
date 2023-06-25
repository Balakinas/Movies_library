const numberOfFilms = prompt("Hom much movies did you watch?", "");

personalMovieDB = {
  "count": +numberOfFilms,
  "movies": {},
  "actors": {},
  "genres": [],
  "privat": false
};

if (personalMovieDB.count < 10) {
  alert("Просмотрено довльно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман!");
}

for (let i = 0; i <= 1; i++) {
  do {
     movie = prompt(`movie ${i + 1} ?`, "");
  } while (!movie || movie.length > 50);
  movieRate = prompt("how would you rate it?", "");
  personalMovieDB.movies[movie] = movieRate;
}



console.log(personalMovieDB);




