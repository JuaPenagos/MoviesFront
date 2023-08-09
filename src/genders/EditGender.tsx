import { useParams } from "react-router-dom"

export default function EditGender(){

    const {id}: any = useParams();

    return(
        <>
        <h3>Editar Generos</h3>
        <h4> El id es {id}</h4>
        </>
        
    )
}