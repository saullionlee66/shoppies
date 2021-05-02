import React, {useContext} from 'react'
import {Button,ListGroup} from 'react-bootstrap'
import {MovieContext} from './MovieContext'
import '../App.css';

function NominationList() {
    const {removeHandler,count,nominationList,removeAllHandler} = useContext(MovieContext)

    return (
        <div className="nominationList">
            <div className="mb-2">
                {count>0 && (
                    <div>
                        <h3 className="text-warning">Nomination List</h3>
                        <h5 className="text-light">Count:{count}</h5>
                        <Button variant="dark" onClick={removeAllHandler}>REMOVE ALL</Button>
                    </div>
                )}
                

            </div>
            {
                nominationList && nominationList.map( movie => {
                    if(movie.isNominated === false){
                        return
                    }
                    return (
                        <ListGroup className="mb-2" key={movie.imdbID}>
                            <ListGroup.Item variant="success" >{movie.Title} ({movie.Year})</ListGroup.Item>
                            <Button variant="dark" name={movie.imdbID} onClick={removeHandler}>REMOVE</Button>
                        </ListGroup>
                    )
                    
                }
                )  
            }

        </div>
    )
}

export default NominationList
