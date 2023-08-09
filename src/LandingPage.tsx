import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies/IndividualMovie.model";
import ListMovies from "./movies/ListMovies";

export default function LandingPage()
{
    const [movies, setMovies] = useState<landingPageDTO>({});
    useEffect(() => {
      const timerId = setTimeout(() => {
        setMovies({
          cinemaMovies: [
            {
              id: 1,
              title: "Spider-Man: far from Home",
              poster:
                "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
            },
            {
                
              id: 2,
              title: "Moana",
              poster:
                "https://m.media-amazon.com/images/I/51g7Rl4Xa1L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
            },
          ],
          premierMovies: [
            {
              id: 3,
              title: "Soul",
              poster:
                "https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg",
            },
          ],
        });
      }, 1000);
      return () => clearTimeout(timerId);
    })

    return(
        <>
        <h3>En Cartelera</h3>
            <ListMovies movies={movies.cinemaMovies} />
            <h3>Próximos Estrenos</h3>
            <ListMovies movies={movies.premierMovies} />
        </>
        
    )
}