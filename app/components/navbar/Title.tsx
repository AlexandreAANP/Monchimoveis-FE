
export default function Title({title}: {title: string}) {

    const style :any = {
        "fontSize": "22px",
        "color": "#eee",
        "fontWeight": "400",
        "textTransform": "uppercase",
        "letterSpacing": "1px"
    }

    return <a href="#" className="mr-4 cursor-pointer" style={style}>{title}</a>
}