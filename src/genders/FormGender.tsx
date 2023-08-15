import Button from "../utils/Button";
import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import { genderCrateDTO } from "./Gender.model.d.";
export default function FormGender(props: formGenderProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText
            campo="nombre"
            label="Nombre"
            placeholder="Nombre Genero"
          />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Guardar
          </Button>
          <Link className="btn btn-secondary" to="/generos">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formGenderProps{
model: genderCrateDTO;
onSubmit(values: genderCrateDTO, action: FormikHelpers<genderCrateDTO>): void;
}