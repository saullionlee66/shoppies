import React,{useContext} from 'react'
import {Button,Card,Image} from 'react-bootstrap'
import {MovieContext} from './MovieContext'
import '../App.css';

function Movie({movie}) {
    const {count, nominateHandler} = useContext(MovieContext);
    return (
        <div>
            <Card style={{width:'14rem'}} className="m-2">
                <Card.Body>
                    <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                    <Card.Text>
                        <Image src={movie.Poster} alt="No Photo Provided" fluid />
                    </Card.Text>
                    <Button
                        name={movie.imdbID} onClick={nominateHandler}
                        disabled={movie.isNominated || count>=5} >NOMINATE
                    </Button>    
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default Movie
