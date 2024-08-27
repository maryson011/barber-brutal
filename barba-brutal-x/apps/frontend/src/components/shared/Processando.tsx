import Image from 'next/image'
import Logo from './Logo'

export default function Processando() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/banners/principal.webp" fill alt="banner" />
            <div className="
                    flex flex-col justify-center items-center
                    absolute top-0 left-0 w-full h-full gap-2
                    bg-black/90
                "
            >
                <Logo />
                <span className='font-light text-zinc-500 ml-1.5'>Processando...</span>
            </div>
        </div>
    )
}