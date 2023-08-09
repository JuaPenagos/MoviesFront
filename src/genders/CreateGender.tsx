

import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGender(){
    const history = useNavigate();

    return(
        <>
            <h3>Crear Generos</h3>
        <Button onClick={() => history("/generos")}>Salvar</Button>
        </>

    )
}