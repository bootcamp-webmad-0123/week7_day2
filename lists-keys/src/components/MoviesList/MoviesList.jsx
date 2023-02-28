import { useState } from "react"
import { moviesArray } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesArray)
    const [showMovies, setShowMovies] = useState(true)

    const removeMovie = movieToDelete => {
        const newMovies = movies.filter(elm => elm._id != movieToDelete)
        setMovies(newMovies)
    }

    const addMovie = () => {
        const newMovie = { title: 'Pirañaconda', director: 'Bardem', _id: '8746IKGH', hasOscars: true, IMDBRating: 9 }

        // Saco una copia liviana (los array se pasan por referencia, no por valor!)
        const moviesCopy = [...movies]

        // Manipuilo la copia (unshift NO retorna un nuevo array, muta el original)
        moviesCopy.unshift(newMovie)

        // Actualizo el estado con la copia mutada
        setMovies(moviesCopy)
    }

    const switchMoviesShow = () => {
        setShowMovies(!showMovies)
    }

    return (
        <>
            <h2>Movie List</h2>
            <button onClick={addMovie}>Añadir sacando copia</button>
            <button onClick={switchMoviesShow}>{showMovies ? 'Ocultar peliculas' : 'Mostrar películas'}</button>
            {
                showMovies && movies.map(elm => {
                    return <MovieCard key={elm._id} {...elm} removeMovie={removeMovie} />
                })
            }
        </>
    )
}

export default MoviesList