import './App.css';
import Movies from './Components/Movies'
import SearchBar from './Components/SearchBar'
import NominationList from './Components/NominationList'
import {MovieProvider} from './Components/MovieContext'
function App() {
  
  return (
    <MovieProvider>
      <div className="App">
        <div className="bar">
          <SearchBar  />
        </div>
        <div className="components">
          <div className="movies">
            <Movies />
          </div>
          <div className="nominationList">
            <NominationList />
          </div>
        </div>
      </div>
    </MovieProvider>

  );
}

export default App;
