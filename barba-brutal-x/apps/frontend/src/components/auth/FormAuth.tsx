'use client'
import Image from "next/image"
import Logo from "../shared/Logo"
import Link from "next/link"
import { useState } from "react"

export default function FormAuth() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')

    function alternarModo() {
        setModo(modo === 'login' ? 'cadastro' : 'login')
    }
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
                <div>
                    {modo === 'login' ? (
                        <h1 className="text-2xl font-thin">Seja bem vindo</h1>
                    ) : (
                        <h1 className="text-2xl font-thin">Cadastro</h1>
                    )}
                </div>
                <div className="flex flex-col gap-4 w-80">
                    {modo === 'cadastro' && (
                        <input type="text" placeholder="Nome" className="input"/>
                    )}
                    <input type="text" placeholder="E-mail" className="input"/>
                    <input type="password" placeholder="Senha" className="input" />
                    {modo === 'cadastro' && (
                        <input type="tel" placeholder="Telefone" className="input" />
                    )}
                    <div className="flex gap-2">
                        <button className="button flex-1 bg-green-600">
                            {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                        </button>
                        <Link href="/" className="button flex-1 flex justify-center">Cancelar</Link>
                    </div>
                    <div className="flex mt-6">
                        <button 
                            onClick={alternarModo} 
                            className="button-outline flex-1"
                        >
                            {modo === 'login' ? (
                                <div>Ainda não tem conta? <span className="text-yellow-400 font-bold">Cadastre-se</span></div>
                            ) : (
                                <div>Já tem conta? <span className="text-yellow-400 font-bold">Entre na plataforma</span></div>
                            )}
                        </button>
                    </div>
                </div>
                <span>Formulário de autenticação</span>
            </div>
        </div>
    )
}