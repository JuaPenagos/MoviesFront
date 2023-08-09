import LandingPage from "./LandingPage";
import CreateActors from "./actors/CreateActors";
import EditActors from "./actors/EditActors";
import IndexActors from "./actors/IndexActors";
import CreateCinemas from "./cinemas/CreateCinemas";
import EditCinemas from "./cinemas/EditCinemas";
import IndexCinemas from "./cinemas/IndexCinemas";
import CreateGender from "./genders/CreateGender";
import EditGender from "./genders/EditGender";
import IndexGender from "./genders/IndexGender";
import CreateMovies from "./movies/Createmovies";
import EditMovies from "./movies/EditMovies";
import FilterMovies from "./movies/FilterMovies";
import RedirectToLanding from "./utils/RedirectToLanding";

const routes = [
    {path: '/generos', component: IndexGender},
    {path: '/generos/crear', component: CreateGender},
    {path: '/generos/editar/:id', component: EditGender},
    {path: '/actores', component: IndexActors},
    {path: '/actores/crear', component: CreateActors},
    {path: '/actores/editar', component: EditActors},
    {path: '/cines', component: IndexCinemas},
    {path: '/cines/crear', component: CreateCinemas},
    {path: '/cines/editar', component: EditCinemas},
    {path: '/peliculas/filtro', component: FilterMovies},
    {path: '/peliculas/crear', component: CreateMovies},
    {path: '/peliculas/editar', component: EditMovies},
    {path: '/', component: LandingPage},
    {path: '*', component: RedirectToLanding},
]

export default routes;