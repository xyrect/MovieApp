import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import axios from 'axios';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 

  const getRecentMovies = () => {
    axios({
      method: 'GET',
      url: 'http://www.omdbapi.com/',
      params: {
        s: 'war',  
        apikey: '87fa3729',
      },
    })
      .then((response) => {
        if (response.data.Search) {
          setMoviesList(response.data.Search);
        } else {
          setMoviesList([]);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch data:', err);
      });
  };

  const getMoviesData = () => {
    if (searchQuery.trim() === '') {
      getRecentMovies();
    } else {
      axios({
        method: 'GET',
        url: 'http://www.omdbapi.com/',
        params: {
          s: searchQuery,
          apikey: '87fa3729',
        },
      })
        .then((response) => {
          if (response.data.Search) {
            setMoviesList(response.data.Search);
          } else {
            setMoviesList([]);
          }
        })
        .catch((err) => {
          console.error('Failed to fetch data:', err);
        });
    }
  };

  useEffect(() => {
    getMoviesData();
  }, [searchQuery]); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    getMoviesData(); 
  };

  return (
    <div style={{ backgroundColor: "#3b3b42", color: "white", minHeight: "100vh" }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
        <div className="container">
          <Header title="FinProH8" />
          <Search
            formVal={searchQuery}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
          />
        </div>
      </nav>
      <div className="container">
        <h3 className="my-4 text-white bold">
          {searchQuery.trim() === '' 
            ? 'Showing Recent Movies' 
            : `Showing results for: ${searchQuery}`}
        </h3>
        <div className="row">
          {moviesList.length > 0 ? (
            moviesList.map((movie) => (
              <Movie key={movie.imdbID} img={movie.Poster} textTitle={movie.Title} />
            ))
          ) : (
            <p>No movies found for "{searchQuery}".</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
