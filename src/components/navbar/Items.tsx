'use client';
import Item from "./Item";
import { ItemProps } from "./navbartw";


export default function Items({ items }: { items: ItemProps[] }) {

    function arrayItems(){

        return items.map((item, e) => {
            const key = "navbar-item-"+e;
            return <Item content={item.content} href={item.href} target={item.target} icon={item.icon} key={key}/>
            });
    }

    return (<ul className="mt-2 mb-4 flex gap-2 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-right" >{arrayItems()}</ul>);
}
