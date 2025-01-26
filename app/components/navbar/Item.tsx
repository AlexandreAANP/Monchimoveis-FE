
import Icon from './Icon'
interface NavBarItemProps {
    content: string;
    href: string;
    target?: boolean;
    icon?: string;

}
const scrollToSection = (id: string) => {
    const section = document.getElementById(id); // Find the section by its ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); // Smooth scroll to the section
    }
};
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
                <li className={className} key="{content}"><a className='cursor-pointer' target="_blank" onClick={() => scrollToSection(href.replace("#", ""))}><span className="flex items-center gap-x-2 text-white" style={style}><Icon icon={icon} ></Icon>{content}</span></a></li>
            )
        }
        return (
            <li className={className} key="{content}">{icon == "bi bi-star-fill" }<a className='cursor-pointer' style={style} target="_blank" onClick={() => scrollToSection(href.replace("#", ""))}>{content}</a></li>
        )
    }
    
    if (icon){
        return (
            <li className={className} key="{content}"><a className='cursor-pointer' onClick={() => scrollToSection(href.replace("#", ""))}><span className="flex items-center gap-x-2" style={style}><Icon icon={icon} ></Icon>{content}</span></a></li>
        )
    }
    return (
        <li className={className} key="{content}"><a className='cursor-pointer' style={style} onClick={() => scrollToSection(href.replace("#", ""))}>{content}</a></li>
    ) 
}