import { Form, Formik, FormikHelpers } from "formik";
import { actorCreateDTO } from "./Actors.model.d";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import FormGroupDate from "../utils/FormGroupDate";
import FormGroupImage from "../utils/FormGroupImage";

export default function FomActors(props: formActorsProps)
{
    return(
        <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
          fechaNacimiento: Yup.date().nullable().required("Este Campo Es Requerido")
      })}
    >
{(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre"/>
          <FormGroupDate label="Fecha Nacimiento" field="fechaNacimiento"/>
          <FormGroupImage field="foto" label="Foto"/>
          <Button type="submit">
            Guardar
          </Button>
          <Link className="btn btn-secondary" to="/actores">
            Cancelar
          </Link>
        </Form>
      )}
        </Formik>
    )
}
interface formActorsProps
{
    model: actorCreateDTO;
    onSubmit(values: actorCreateDTO, action: FormikHelpers<actorCreateDTO>): void;
}