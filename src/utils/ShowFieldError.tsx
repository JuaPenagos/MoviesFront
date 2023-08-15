export default function ShowFieldError(props: showFieldErrorProps)
{
    return(
        <div className="text-danger">{props.mensaje}</div>
    )

}
interface showFieldErrorProps{
    mensaje: string;
}