import { Link, Outlet } from "react-router-dom"
const Header = () => {
    return (
        <>
            <nav className="menu">
                <Link to={'/'}>Home</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/resume'}>Resume</Link>
            </nav>
            <Outlet />
            <footer>
                cocreta2
            </footer>
        </>
    )
}

export default Header