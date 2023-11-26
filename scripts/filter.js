//DEVELOPER: Andrew Anil George, IS117-005, Fall 2023

const movies = [
    { title: 'Anjaam Pathiraa', year: 2020, genre: 'crime', language: 'Malayalam', reviewUrl: 'https://www.imdb.com/title/tt10717738/reviews/?ref_=ttrt_ql_2' },
    { title: 'Kannur Squad', year: 2023, genre: 'crime', language: 'Malayalam', reviewUrl: 'https://www.imdb.com/title/tt25274786/reviews/?ref_=ttrt_ql_2'  },
    { title: 'Yennai Arindhaal', year: 2015, genre: 'action', language: 'Tamil', reviewUrl: 'https://www.imdb.com/title/tt4258292/reviews/?ref_=ttrt_ql_2'  },
    { title: 'Mahaan', year: 2020, genre: 'action', language: 'Tamil', reviewUrl: 'https://www.imdb.com/title/tt12472554/reviews/?ref_=tt_ql_2' },
    { title: 'Rush Hour', year: 1999, genre: 'comedy' , language: 'English', reviewUrl: 'https://www.imdb.com/title/tt0120812/reviews/?ref_=ttrt_ql_2'},
    { title: 'Johnny English', year: 2003, genre: 'comedy' , language: 'English', reviewUrl: 'https://www.imdb.com/title/tt0274166/reviews/?ref_=ttrt_ql_2'},
    { title: 'Bangalore Days', year: 2014, genre: 'romantic', language: 'Malayalam', reviewUrl: 'https://www.imdb.com/title/tt3668162/reviews/?ref_=ttrt_ql_2'  },
    { title: '100 Days of Love', year: 2015, genre: 'romantic', language: 'Malayalam', reviewUrl: 'https://www.imdb.com/title/tt3995348/reviews/?ref_=ttrt_ql_2' },
    { title: 'Ohm Shanthi Oshaana', year: 2014, genre: 'romantic', language: 'Malayalam', reviewUrl: 'https://www.imdb.com/title/tt3517192/reviews/?ref_=tt_ql_2'  }
];

// Function to create a movie card
function createMovieCard(movie) {
    return `
        <div class="col-md-4 mb-4">
            <a href="${movie.reviewUrl}" class="card-link" target="_blank"> <!-- Use reviewUrl here -->
                <div class="card hoverable-card">
                    <img class="card-img-top" src="../images/${encodeURI(movie.title.toLowerCase().replace(/\s+/g, '_'))}.jpg" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title} (${movie.year})</h5>
                        <p class="card-text">Genre: ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}<br>Language: ${movie.language}</p>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Function to filter the movie cards by genre and/or language
function filterMovies(filterType, filterValue) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear the movie list

    let filteredMovies;
    if (filterType === 'genre') {
        filteredMovies = filterValue === 'all' ? movies : movies.filter(movie => movie.genre === filterValue);
    } else if (filterType === 'language') {
        filteredMovies = filterValue === 'all' ? movies : movies.filter(movie => movie.language === filterValue);
    } else {
        filteredMovies = movies;
    }

    // Create and append the movie cards to the movie list
    filteredMovies.forEach(movie => {
        movieList.innerHTML += createMovieCard(movie);
    });
}

// Event listener for filter buttons
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter-type');
            const filterValue = this.getAttribute('data-filter-value');
            filterMovies(filterType, filterValue);
        });
    });

    // Initial display of all movies
    filterMovies('genre', 'all');
});

