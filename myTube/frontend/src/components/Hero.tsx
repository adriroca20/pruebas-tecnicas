import { IHero } from "../interfaces/hero.interface"

export const Hero = (heroData: IHero) => {
    const { title, subtitle, description } = heroData
    return (
        <section className="lg:h-[70vh] flex justify-center px-20 items-start flex-col gap-5">
            <h1 className="text-6xl font-extrabold">{title}</h1>
            <h3 className="text-3xl font-bold text-balance">{subtitle}</h3>
            <p className="text-xl">
                {description}
            </p>
            <div>
            <button type="button" className="text-white text-lg font-medium bg-[#017fba] hover:bg-slate-200 hover:text-[#017fba] focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 me-2 mb-2 transition">Watch now</button>
            </div>
        </section>
    )
}
