
import FormActors from "./FormActors";

export default function EditActors(){
    return(
        <>
        <h3>Crear Actores</h3>
        <FormActors model={{nombre: 'Tom Holland', fechaNacimiento: new Date("1996-06-01")}}
            onSubmit={ values => 
                console.log(values)
            }/>
        </>
    )
}