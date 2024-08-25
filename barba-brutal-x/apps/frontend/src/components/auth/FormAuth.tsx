import Image from "next/image"
import Logo from "../shared/Logo"

export default function FormAuth() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/banners/principal.webp" fill alt="banner" />
            <div className="
                    flex flex-col justify-center items-center
                    absolute top-0 left-0 w-full h-full gap-10
                    bg-black/80
                "
            >
                <Logo />
                <div className="flex flex-col gap-4 w-80">
                    <input type="text" placeholder="Nome" className="input"/>
                    <input type="text" placeholder="E-mail" className="input"/>
                    <input type="password" placeholder="Senha" className="input" />
                    <input type="tel" placeholder="Telefone" className="input" />
                    <div className="flex gap-2">
                        <button className="button flex-1 bg-green-600">Cadastrar</button>
                        <button className="button flex-1">Cancelar</button>
                    </div>
                </div>
                <span>Formulário de autenticação</span>
            </div>
        </div>
    )
}