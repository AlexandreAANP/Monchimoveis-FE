
import Icon from './Icon'
interface NavBarItemProps {
    content: string;
    href: string;
    target?: boolean;
    icon?: string;

}

export default function NavBarItem({content, href, target, icon}: NavBarItemProps) {
    const className = "flex items-center gap-x-2 p-1 font-medium"
    const style ={
        "color": "#a7c44c",
        "fontWeight": "400",
        "fontSize": "15px",
        "padding": "5px",
        "fontFamily": "'Roboto', sans-serif"
    }
    if (target) {
        if(icon){
            return (
                <li className={className} key="{content}"><a href="#${href}" target="_blank"><span className="flex items-center gap-x-2 text-white" style={style}><Icon icon={icon} ></Icon>{content}</span></a></li>
            )
        }
        return (
            <li className={className} key="{content}">{icon == "bi bi-star-fill" }<a style={style} href="#${href}" target="_blank">{content}</a></li>
        )
    }
    
    if (icon){
        return (
            <li className={className} key="{content}"><a href="#${href}"><span className="flex items-center gap-x-2" style={style}><Icon icon={icon} ></Icon>{content}</span></a></li>
        )
    }
    return (
        <li className={className} key="{content}"><a href="#${href}" style={style}>{content}</a></li>
    ) 
}