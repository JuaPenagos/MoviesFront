import { ReactElement } from "react";

export default function GenericList(props: genericListProps)
{
    if(!props.listed)
    {
        if(props.loadUI)
        {
            return props.loadUI; 
        }
        return <>Cargando...</>
    } else  if(props.listed.length === 0)
    {
        if(props.EmptyList)
        {
            return props.EmptyList; 
        }
        return <>No hay elementos para mostrar.</>
    }else
    {
        return props.children;
    }
}
interface genericListProps{
    listed: any;
    children: ReactElement;
    loadUI?: ReactElement;
    EmptyList?: ReactElement;
}