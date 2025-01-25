interface NavBarProps {
    name: string;
    dchangeTime: string;
}

export default function NavBar({ name, dchangeTime }: NavBarProps) {

    const date = new Date().toString();

    return (
        <nav className="flex justify-between items-center p-8">
            <h1 className="text-2xl font-bold"></h1>
            <ul className="flex gap-4">
                <li><a className="text-red" href="#" >Home - {changeTime()}</a></li>
                <li><a href="#">{name}</a></li>
                <li><a href="#">{dchangeTime}</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function changeTime() {
    const date = new Date().toString();
    return date;
}

