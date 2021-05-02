import React, {useContext} from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext'
import '../App.css';


function Movies() {
    const {movies} = useContext(MovieContext)
    console.log(movies)

    return (
        <div className="movieList">
            {movies? movies.map( movie => (
                <Movie key={movie.imdbID} movie={movie}/>
            )
            ):null}
        </div>
    )
}

export default Movies
