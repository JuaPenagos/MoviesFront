import './App.css';
import { movie } from './movies/IndividualMovie.model';
import IndividualMovie from './movies/IndividualMovie';
import ListMovies from './movies/ListMovies';

function App() {

  const cinemaMovies: movie[] = [
    {
      id: 1, 
      title: 'Spider-Man: far from Home', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
    },
    {
      id: 2, 
      title: 'Moana', 
      poster: 'https://m.media-amazon.com/images/I/51g7Rl4Xa1L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
    }

  ]

  const premierMovies: movie[] = [
    {
      id: 3, 
      title: 'Soul', 
      poster: 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg'
    }

  ]

  return (
    <>
    <h3>En Cartelera</h3>
  <ListMovies movies={cinemaMovies}/>
  <h3>Próximos Estrenos</h3>
  <ListMovies movies={premierMovies}/>
    </>
  );
}

export default App;
