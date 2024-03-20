import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function FormGroupImage(props: formGroupImage)
{
    const divStyle = {marginTop: '10px'}
    const imgStyle = {width: '450px'}
    const [imageBase64, setImageBase64] = useState('');
    const {values} = useFormikContext<any>();


    const manageOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            const archivo =  e.currentTarget.files[0];
            toBase64(archivo)
            .then((base64Image: string) => setImageBase64(base64Image))
            .catch(error => console.error(error))
            values[props.field] = archivo;
        }
    }

    const toBase64 = (file: File) => {
        return new Promise<string>((resolve, reject)=> {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = (error) => reject(error);
        })
    }

return(
    <div className="form-group">
        <label>{props.label}</label>
        <div>
            <input type="file" accept="image/*" onChange={manageOnchange}/>
        </div>
        {imageBase64 ? <div>
            <div style={divStyle}>
            <img style={imgStyle} src={imageBase64} alt="ImagenSeleccionada"/> 
            </div>
             </div> : null }
    </div>
)
}
interface formGroupImage{
    field: string;
    label: string;
    imageUrl?: string;
}