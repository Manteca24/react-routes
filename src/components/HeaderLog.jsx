import { Link, Outlet } from "react-router-dom"
const HeaderLog = () => {
    return (
        <>
            <nav className="menu">
                <Link to={'/'}>reyes</Link>
                <Link to={'/cocreta'}>cocreta</Link>
                <Link to={'/luffy'}>Luffy</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default HeaderLog