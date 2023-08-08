import { movie } from "./IndividualMovie.model";
import css from './IndividualMovie.module.css';
export default function IndividualMovie(props: individualMoviesProps){
    const buidLink = () => `/pelicula/${props.movie.id}`
return (
<div className={css.div}>
    <a href= {buidLink()}>
        <img src={props.movie.poster} alt="Poster">
        </img>
    </a>
    <p>
        <a href={buidLink()}>
            {props.movie.title}
        </a>
    </p>
</div>    
)
}
interface individualMoviesProps
{
    movie: movie;
}