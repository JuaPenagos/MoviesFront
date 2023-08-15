import FormActors from "./FormActors"

export default function CreateActors(){
    return(
        <>
        <h3>Crear Actores</h3>
        <FormActors model={{nombre: '', fechaNacimiento: undefined}}
            onSubmit={ values => 
                console.log(values)
            }/>
        </>
    )
}