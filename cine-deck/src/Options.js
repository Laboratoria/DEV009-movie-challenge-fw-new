import React, { useEffect, useState } from 'react';
import './Options.css'

function Options({ onSetMovies }) {
    const [movieName, setMovieName] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');

    const API_KEY = '96706b0f33b454df6da0561912cd7362'
    const predefinedGenres = [
        { id: 878, name: 'Science Fiction' },
        { id: 10752, name: 'War' },
        { id: 27, name: 'Horror' },
        { id: 99, name: 'Documentary' },
        { id: 14, name: 'Fantasy' },
        { id: 10749, name: 'Romance' }
    ];


    function discoverMoviesByGenre() {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al descubrir películas por genero');
                }
                return response.json();
            })
            .then(data => {
                const movies = data.results.map(movie => ({
                    title: movie.title,
                    date: movie.release_date,
                    poster: movie.poster_path,
                    stars: movie.vote_average
                }));
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Hubo un error al descubrir películas por genero:", error);
                onSetMovies([]);
            });
    }
    function discoverMoviesByYear() {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${releaseYear}&sort_by=vote_count.desc`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al descubrir películas por año de lanzamiento');
                }
                return response.json();
            })
            .then(data => {
                const movies = data.results.map(movie => ({
                    title: movie.title,
                    date: movie.release_date,
                    poster: movie.poster_path,
                    stars: movie.vote_average
                }));
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Hubo un error al descubrir películas por año:", error);
                onSetMovies([]);
            });
    }

    function findMovieByName() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error no existen epliculas con ese nombre');
                }
                return response.json();
            })
            .then(data => {
                const movies = data.results.map(movie => ({
                    title: movie.title,
                    date: movie.release_date,
                    poster: movie.poster_path,
                    stars: movie.vote_average
                }));
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Hubo un error al buscar la película:", error);
                onSetMovies([]);
            });
    }


    // ------------ ------ REGRSEA LAS PELICULAS MAS POPULARES DEL API

    function fetchPopularMovies() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                if (!response.ok) { throw new Error('Error finding popular movies'); }
                return response.json();
            })
            .then(data => {
                const movies = data.results.map(movie => ({
                    title: movie.title,
                    date: movie.release_date,
                    poster: movie.poster_path,
                    stars: movie.vote_average
                }));
                onSetMovies(movies);
            })
            .catch(error => {
                console.error("Error finding popular movies", error);
                onSetMovies([]);
            });
    }
useEffect(()=>{
    discoverMoviesByGenre();
}, [selectedGenre])

    // ------------ RETURN -------------
    return (
        <article>
            <div>
                
            <input
                id="byName"
                type='text'
                placeholder="Write the name of the movie"
                value={movieName}
                onChange={e => setMovieName(e.target.value)}
            />
            <button  onClick={findMovieByName}>SEARCH</button>
            </div>
            <div>
            <input
                type='text'
                placeholder="write the year"
                value={releaseYear}
                onChange={e => setReleaseYear(e.target.value)}
            />
            <button onClick={discoverMoviesByYear}>BRING</button>
            </div>
            <div>
            <select
                value={selectedGenre}
                onChange={e => setSelectedGenre(e.target.value)}
            >
                <option value="">Genres</option>
                {predefinedGenres.map(genre => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
            
            </div>
            <div>
                <p></p>
            <button  onClick={fetchPopularMovies}>POPULAR</button>
            </div>
        </article>
    );
}

export default Options;