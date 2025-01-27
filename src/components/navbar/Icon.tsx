import { GoStarFill } from "react-icons/go";
import { BsBagCheckFill } from "react-icons/bs";


export default function Icon({icon}: {icon: string}) {
    if(icon == "bi bi-star-fill"){
        return <GoStarFill style={{marginBottom : "5px"}}/>
    }
    return <BsBagCheckFill  style={{marginBottom : "5px"}}/>
}