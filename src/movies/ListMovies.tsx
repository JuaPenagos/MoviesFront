import IndividualMovie from "./IndividualMovie";
import { movie } from "./IndividualMovie.model";
import  css  from "./ListMovies.module.css";
export default function ListMovies(props: listMoviesProps){
return (

    <div className={css.div}>
        {props.movies.map(movie => <IndividualMovie movie = {movie}
        key={movie.id}/>)}
    </div>
)
}

interface listMoviesProps{
    movies: movie[]
}