
import FormGender from "./FormGender";

export default function EditGender(){
    return(
        <>
        <h3>Editar Generos</h3>
        <FormGender model={{nombre: 'Accion'}}
            onSubmit={async values => {
                await new Promise(r => setTimeout(r,3000))
                console.log(values)
            }}/>

        </>
        
    )
}