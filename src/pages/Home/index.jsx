import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import Search from "../../components/Search";
import MovieBox from "../../components/MovieBox";
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    getMovies();
    getFavorites();
  }, []);

  useEffect(() => {
    if (showFavorites) {
      const filteredFavorites = movies.filter(movie => favorites.includes(movie.id));
      setFilteredMovies(filteredFavorites);
    } else {
      setFilteredMovies(movies);
    }
  }, [showFavorites, favorites, movies]);


  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setMovies([...response.data.results]);
        setFilteredMovies([...response.data.results]);
      })
      .catch(e => console.log(e));
  };

  const getFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) setFavorites(storedFavorites);
  }

  const handleSearchChange = e => {
    let moviesFilter;
    if (!showFavorites) {
      moviesFilter = movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()));
    }
    else {
      moviesFilter = movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()) && favorites.includes(movie.id));
    }
    setFilteredMovies(moviesFilter);
  };

  const handleFavoriteChange = (id) => {
    let updatedFavorites;
  
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter(itemID => itemID !== id);
    } 
    else {
      updatedFavorites = [...favorites, id];
    }
  
    setFavorites(updatedFavorites);
  
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };


  return (
    <S.Content>
      <S.Title>Popular Movies</S.Title>
      <Search onChange={handleSearchChange} />
      <S.CheckWrapper>
        <S.CheckButton onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </S.CheckButton>
        <p>Show only my favorite movies.</p>
      </S.CheckWrapper>
      <S.MoviesWrapper>
        {filteredMovies.map(movie => (
          <MovieBox
            key={movie.id}
            src={movie.backdrop_path}
            alt={`Movie image: ${movie.title}`}
            title={movie.title}
            rating={movie.vote_average}
            description={movie.overview}
            action={() => handleFavoriteChange(movie.id)}
            favorite={favorites.includes(movie.id)}
          />
        ))}
      </S.MoviesWrapper>
    </S.Content>
  );
};

export default Home;