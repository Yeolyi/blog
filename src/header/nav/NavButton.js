import { Link } from "react-router-dom"

export default function NavButton({title, link}) {
    return (
    <div className="button">
        <Link to={link}>
            <p>{title}</p>
        </Link>
    </div>
    )
}