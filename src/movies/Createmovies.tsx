import axios, {AxiosResponse} from "axios"
import { useEffect } from "react"
import {movie} from "./IndividualMovie.model"
import { URLMovie } from "../utils/endpoints"
export default function CreateMovies(){
    useEffect(() =>{
        axios.get(URLMovie).then((respuesta: AxiosResponse<movie[]>) => {
            console.log(respuesta.data);
        })
    },[])
    return(
        <h3>Crear Peliculas</h3>
    )
}