import { useEffect } from "react"
import { Link } from "react-router-dom"

export const NotFoundScreen = () => {
    useEffect(() => {
        document.title = "404 Not Found - MyTube"
    });
    return (
        <div className="flex h-screen justify-center items-center text-zinc-900 dark:text-slate-200 flex-col gap-5">
            <h1 className="text-5xl font-bold">404 NOT FOUND</h1>
            <h3 className="text-2xl">This page doesn't exists</h3>
            <Link to="/" className="text-blue-500 text-xl">Go back to home page</Link>
        </div>
    )
}