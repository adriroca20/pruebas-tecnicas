import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center font-bold h-20 px-20 text-white">
            <div className="flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <img src="/vite.svg" alt="Vite Logo" />
            <div className="flex gap-5">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    )
}