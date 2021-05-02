import React, {useState, useEffect, createContext} from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios'

export const MovieContext =createContext();

export const MovieProvider = (props) =>{
  const [movies,setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [count,setCount] = useState(reactLocalStorage.getObject('nominationList').length || 0);
  const [nominationList, setNominationList] = useState(reactLocalStorage.getObject('nominationList') || []);
  const MY_KEY = 'c7690b39';
  const API = `http://www.omdbapi.com/?apikey=${MY_KEY}&type=movie&s=${search}`;

  const getMovies = async () => {
      const result = await axios.get(API);
      const {data} = result;
      const {Search} = data;
      Search && Search.map( e => {
        return e['isNominated'] = false;
      })
      setMovies(Search);
    }

    const updateSearch = e => {
      setSearch(e.target.value);
    }
    
    useEffect( () => {
      getMovies();
    },[search])

    useEffect( ()=>{
      reactLocalStorage.setObject('nominationList',nominationList);
      console.log(reactLocalStorage.getObject('nominationList'));
    },[nominationList])

    const nominateHandler = (e) =>{
      movies.map( movie => {
        if(e.target.name === movie.imdbID){
          setCount(count+1);
          movie.isNominated = true;
          return setNominationList([...nominationList, movie])

        }
        return movie
      })
    }

    const removeHandler = (e) =>{
      console.log(e.target.name)
      nominationList.map( movie => {
        if(e.target.name === movie.imdbID){
          setCount(count-1);
          return movie.isNominated = false;
        }
      })
      setNominationList( nominationList.filter( movie=>{
        return movie.isNominated === true;
      }))
    }

    const removeAllHandler = () =>{
      nominationList.map( movie =>{
        return movie.isNominated = false;
      })
      setCount(0);
      setNominationList([]);
    }


    const value = {
      movies,
      search,
      count,
      nominationList,
      updateSearch,
      nominateHandler,
      removeHandler,
      removeAllHandler
    }


    return (
        <MovieContext.Provider value={value}>
            {props.children}
        </MovieContext.Provider>
    )
    
}

