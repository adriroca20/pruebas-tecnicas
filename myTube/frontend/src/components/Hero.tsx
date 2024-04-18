import { Link } from "react-router-dom"
import { IHero } from "../interfaces/hero.interface"

export const Hero = (heroData: IHero) => {
    const { title, subtitle, description } = heroData
    return (
        <section className="flex justify-center p-20 items-center flex-col gap-5">
            <h1 className="text-6xl font-extrabold">{title}</h1>
            <h3 className="text-3xl font-bold text-balance">{subtitle}</h3>
            <p className="text-xl">
                {description}
            </p>
            <div>
                <div className="flex gap-4">
                    <a href="#related-videos" className="text-white text-xl font-medium bg-[#017fba] hover:bg-slate-200 hover:text-[#017fba] focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 transition">Watch now</a>
                    <Link to="/upload" className="text-blue-500 text-xl font-medium bg-[#d4d9db] hover:bg-slate-200 hover:text-[#017fba] focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 transition">Upload videos</Link>
                </div>
            </div>
        </section>
    )
}
