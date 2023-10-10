import Cards from "./Cards"
import './Movies.css'
function Movies({ titles, currentPage, setCurrentPage }) {

    const moviesPerPage = 5;
    const totalPages = Math.ceil(titles.length / moviesPerPage)
    const diplayedMovies = titles.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)

    return (
        <div>
            <div className="Movies-cards">
                {diplayedMovies.map((movie, index) => ( //Map ciclo for que funciona en react 
                    <Cards key={index} titleMovie={movie.title} dateMovie={movie.date} starMovie={movie.stars} posterMovie={movie.poster} />
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage===index+1 ? 'active': ''}
                    >
                        {index+1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Movies;