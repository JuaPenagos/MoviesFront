import GenericList from "../utils/GenericList";
import Load from "../utils/Load";
import IndividualMovie from "./IndividualMovie";
import { movie } from "./IndividualMovie.model";
import css from "./ListMovies.module.css";

export default function ListMovies(props: listMoviesProps) {
  return (
    <GenericList listed={props.movies}>
      <div className={css.div}>
        {props.movies?.map((movie) => (
          <IndividualMovie movie={movie} key={movie.id} />
        ))}
      </div>
    </GenericList>
  );
}
interface listMoviesProps {
  movies?: movie[];
}
