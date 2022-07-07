import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as S from './style';
import { BsSuitHeart } from 'react-icons/bs';
import { BsSuitHeartFill } from "react-icons/bs";
import Form from '../Form';
import MovieWrapper from '../MovieWrapper';

export default function Main(){
  const [movies, setMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getMovies();
    loadLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('Favs', JSON.stringify(favorites));
  }, [favorites]);

  const loadLocalStorage = () => {
    const saved = localStorage.getItem('Favs');
    if(saved) setFavorites([...JSON.parse(saved)]);
  };

  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=13f2a9b970b1366ea5911d705a1cffd3`).then(response => {
      setMovies(response.data.results.map(item => ({...item, poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`})));
      setMoviesList(response.data.results.map(item => ({...item, poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`})));
    });
  };

  const handleSearchChange = e => {
    const filteredMovies = movies.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setMoviesList(filteredMovies);
  };

  const handleFavoritesChange = item => {
    const aux = favorites.includes(item) ? favorites.filter(favItem => favItem !== item) : [...favorites, item];
    setFavorites(aux);
  }  

  return(
    <S.Wrapper>
        <h1>Popular movies</h1>
        <Form 
            placeholder={'Search movie'}
            text={'Show my favorite movies'}
            onChange={handleSearchChange}
        />
        <S.Movies>
            {moviesList.map((item, index) => (
            <div key={index}>
                <MovieWrapper 
                    img={item.poster_path}
                    alt={item.original_title}
                    title={item.title}
                    note={item.vote_average}
                    onClick={() => handleFavoritesChange(item)}
                    icon={favorites.includes(item) ? <BsSuitHeartFill style={S.heartStyle} /> : <BsSuitHeart style={S.heartStyle}/>}
                    resume={item.overview}
                />
            </div>
            ))}
        </S.Movies>
    </S.Wrapper>
  );
}