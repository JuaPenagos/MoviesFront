import FormGender from "./FormGender";


export default function CreateGender(){

    return(
        <>
            <h3>Crear Generos</h3>
            <FormGender model={{nombre: ''}}
            onSubmit={async values => {
                await new Promise(r => setTimeout(r,3000))
                console.log(values)
            }}/>
        </>
    )
}