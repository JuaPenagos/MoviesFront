import { Formik, Form, Field } from "formik";
import { genderDTO } from "../genders/Gender.model.d.";
import Button from "../utils/Button";

export default function FilterMovies(){
    const initialValue : filterMoviesForm ={
        title : '',
        genderId: 0,
        nextReleases: false,
        inCinema: false
    }

    const generos: genderDTO [] = [{id: 1, nombre: 'Action'}, {id:2, nombre: 'Comedia'}]
    return (
        <>
        <h3>filtrar peliculas</h3>
        <Formik initialValues={initialValue}
            onSubmit={values => console.log(values)}
        >
            {(formikProps) => (
                <Form>
                    <div className="form-inline">
                        <div className="form-group mb-2">
                            <label htmlFor="title" className="sr-only">Titulo</label>
                            <input type="text" className="form-control"
                                id="title" placeholder="titulo de la pelicula"
                                {...formikProps.getFieldProps('title')}
                                />
                        </div>
                        <div className="form-group mx-sm-3 mb-2"></div>
                        <select className="form-control"
                        {...formikProps.getFieldProps('genderId')}
                        >
                            <option value="0">--Seleccione un genero</option>
                            {generos.map(genero => <option key={genero.id} value={genero.id}>{genero.nombre}</option>)}
                        </select>
                        <div className="form-group mx-sm-3 mb-2">
                        <Field className="form-check-input" id="proximosEstrenos" 
                        name="proximosExtrenos"  type="checkbox"/>
                        <label className="form-check-label" htmlFor="proximosEstrenos">Proximos estrenos</label>
                    
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <Field className="form-check-input" id="enCines" 
                        name="enCines"  type="checkbox"/>
                        <label className="form-check-label" htmlFor="encines">En Cines</label>
                    
                    </div>
                    <Button className='btn btn-primary mb-2 mx-sm-3' 
                    onClick={() => formikProps.submitForm()}>Filtrar</Button>
                     <Button className='btn btn-danger mb-2' 
                    onClick={() => formikProps.setValues(initialValue)}>Limpiar</Button>
                    </div>
                    
                </Form>
            )}
        </Formik>

        </>
        
    )
}

interface filterMoviesForm{
    title: string;
    genderId: number;
    nextReleases: boolean;
    inCinema: boolean;
}