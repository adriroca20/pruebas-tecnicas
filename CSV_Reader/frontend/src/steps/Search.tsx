import { useEffect, useState } from "react"
import { type Data } from "../types"
import { searchData } from "../services/search"
import { toast } from "sonner"
import {useDebounce} from "@uidotdev/usehooks"

export const Search = ({ initialData }: { initialData: Data }) => {
    const [data, setData] = useState<Data>(initialData)
    const DEBOUNCE_TIME = 500
    const [search, setSearch] = useState<string>(()=>{
        const url = new URL(window.location.href)
        return url.searchParams.get("q") ?? ""
    })
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
       
    }
    useEffect(() => {
        const newPathname = search ? `?q=${search}` : window.location.pathname
        if (search === "") {
            window.history.replaceState({}, '', newPathname)
            return
        }
        window.history.replaceState({}, '', newPathname)
    }, [search])

    useEffect(() => {
        const url = new URL(window.location.href)
        const search = url.searchParams.get("q")
        if (search) {
            searchData(search).then(([error, data]) => {
                if (error || !data) {
                    toast.error(error?.message ?? "Unknown error")
                    return
                }
                setData(data)
            })
        }
    }, [])

    return (
        <div>
            <h1>Search</h1>
            <form>
                <input type="text" value={search} onChange={handleSearch} />
            </form>
            <ul>
                {
                    data.map((row) => (
                        <li key={row.id}>
                            <article>
                                <ul>
                                    {
                                        Object.entries(row).map(([key, value]) => (
                                            <li key={key}>
                                                <strong>{key}</strong>: {value}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </article>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}