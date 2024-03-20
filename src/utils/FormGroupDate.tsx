import { useFormikContext } from "formik";
import ShowFieldError from "./ShowFieldError";

export default function FormGroupDate(props: formGroupDateProps)
{
    const {values, validateForm, touched, errors} = useFormikContext<any>();
    return(
   <div className="form-group">
    <label htmlFor={props.field}>{props.label}</label>
    <input type="date" className="form-control"
    id={props.field}
    name={props.field}
    defaultValue={values[props.field]?.toLocaleDateString('en-CA')
    }
    onChange={e => {
        const fecha = new Date(e.currentTarget.value);
        values[props.field] = fecha;
        validateForm();
    }}
    />
    {touched[props.field] && errors[props.field] ? 
    <ShowFieldError mensaje={errors[props.field]?.toString()!}/>: null}
   </div>
    ) 
}

interface formGroupDateProps
{
    field: string;
    label: string;
}