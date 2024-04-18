import { Link } from "react-router-dom"
import { DarkThemeToggle } from "flowbite-react"
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <nav className={`fixed top-0 left-0 w-full flex justify-between items-center font-bold h-20 px-20 text-zinc-900 dark:text-slate-200 z-50 transition ${scroll? "bg-slate-200/70 dark:bg-zinc-900/70" : ""}`}>
            <div className="flex gap-5 justify-center items-center">
                <a href="/#home">Home</a>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <img src="/vite.svg" alt="Vite Logo" />
            <div className="flex gap-5 justify-center items-center">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <DarkThemeToggle />
                <Link to="/upload" className="rounded bg-[#3cc1ff] dark:bg-[#017fba] px-4 py-1">Upload</Link>
            </div>
        </nav>
    )
}