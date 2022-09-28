const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "34386ec5358ca437ec6fd6b684886f4d";
const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

const moviesGrid = document.getElementById("movies-grid");

async function fetchMoviesNowPlaying() {
    const response = await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`);
    const jsonResponse = await response.json();
    const movies = jsonResponse.results;
    console.log(movies);

    displayMovies(movies);
}

function displayMovies(movies) {
    moviesGrid.innerHTML = movies
        .map(
            (movie) => `<div class="movie-card">
                            <img src="${imageBaseUrl}${movie.poster_path}"/>
                            <p>⭐${movie.vote_average}</p>
                            <h1>${movie.title}</h1>
                        </div>`
        )
        .join("");
}

fetchMoviesNowPlaying();

