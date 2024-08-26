'use client'
import Image from "next/image"
import Logo from "../shared/Logo"
import Link from "next/link"
import { useState } from "react"
import useAPI from "@/data/hooks/useAPI"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import useFormAuth from "@/data/hooks/useFormAuth"
import CampoSenha from "../shared/formulario/CampoSenha"

export default function FormAuth() {
    const {
            modo,
            nome,
            email,
            senha,
            telefone,
            alternarModo,
            submeter,
            alterarNome,
            alterarEmail,
            alterarSenha,
            alterarTelefone,
        } = useFormAuth()

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
                        <input 
                            type="text" 
                            value={nome}
                            onChange={(e) => alterarNome(e.target.value)}
                            placeholder="Nome" 
                            className="input"
                        />
                    )}
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => alterarEmail(e.target.value)} 
                        placeholder="E-mail" 
                        className="input"
                    />
                    <CampoSenha placeholder="Senha" value={senha} onChangeText={alterarSenha}/>
                    {modo === 'cadastro' && (
                        <input 
                            type="tel"
                            value={telefone}
                            onChange={(e) => alterarTelefone(e.target.value)} 
                            placeholder="Telefone" 
                            className="input" 
                        />
                    )}
                    <div className="flex gap-2">
                        <button onClick={submeter} className="button flex-1 bg-green-600">
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