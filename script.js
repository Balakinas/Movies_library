


// start();



personalMovieDB = {
  "count": 0,
  "movies": {},
  "actors": {},
  "genres": [],
  "privat": true,
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довльно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман!");
    }
  },
  rememberMyMovies: function() {
    for (i = 0; i <= 1; i++) {
      do {
         movie = prompt(`movie ${i + 1} ?`, "");
      } while (!movie || movie.length > 50);
      movieRate = prompt("how would you rate it?", "");
      personalMovieDB.movies[movie] = movieRate;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 4; i++){
      let genre = prompt(`Type your favourite genre ${i} `, "");

      if(genre == '' || genre == null) {
        console.log("Вы ввели некорректные данные");
        i--;
      } else {
        personalMovieDB.genres.push(genre);
      }
    }
    personalMovieDB.genres.forEach((element, index) => {
      console.log(`Любимый жанр ${index + 1} - Это ${element}`);
    });
  },
  showMyDB: function() {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else if (personalMovieDB.privat == true) {
      console.log("DB IS PRIVAT!");
    }
    
  },
  start: function() {
    personalMovieDB.count = prompt("Hom much movies did you watch?", "");
    
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt("Hom much movies did you watch?", "");
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else  {
      personalMovieDB.privat = true;
    }
  }
};


