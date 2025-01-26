import Item from "./Item";
import { ItemProps } from "./navbartw";


export default function Items({ items }: { items: ItemProps[] }) {

    function arrayItems(){

        return items.map((item, e) => {
            let key = "navbar-item-"+e;
            console.log(item);
            return <Item content={item.content} href={item.href} target={item.target} icon={item.icon} key={key}/>
            });
    }

    return (<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-left" >{arrayItems()}</ul>);
}
