import { Link } from "react-router-dom"

type Links = {
    name: string,
    link: string
}

type Props = {
    title:string,
    links: Links[],
}

const ListLinks = ({title, links}: Props) => {
    return (
        <div className="list_of_links">
            <h2>{title}</h2>
            <div>
                {links.map((e, index) => (
                    <Link to={e.link} key={`link_of_links_${e.link}_${index}`} className="link_of_links">{e.name}</Link>
                ))}
            </div>
        </div>
     );
}
 
export default ListLinks;