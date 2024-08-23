import Image from "next/image"
import Cabecalho from "../shared/Cabecalho"
import Link from "next/link"

export default function Slogan() {
    return (
        <div className="relative h-[450px] sm:h-[700px]">
            <Image src="/banners/principal.webp" fill className="object-cover -z-30" alt="Barbearia" />
            <div className="
                flex flex-col items-center
                absolute top-0 left-0 w-full h-full
                bg-black/70
            ">
                <Cabecalho />
                <div className="flex flex-col items-center flex-1 justify-center gap-5">
                    <h1 className="flex flex-col items-center">
                        <span className="text-2xl sm:text-3xl md:text-4x font-thin tracking-widest">Transformações</span>
                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient">Lendárias</span>
                    </h1>
                    <p className="text-zinc-300 text-base sm:text-lg font-extralight">🤘 Seu estilo é o nosso som! 🤘</p>
                    <Link href="/agendamento" className="
                        bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-base md:text-lg
                        px-4 py-2 rounded-sm hover:from-green-600 hover:to-green-700
                    "
                    >Agendar Agora</Link>
                </div>
            </div>
        </div>
    )
}