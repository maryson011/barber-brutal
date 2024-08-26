import { useState } from "react"
import useAPI from "./useAPI"
import useSessao from "./useSessao"
import { useRouter } from "next/navigation"

export default function useFormAuth() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')

    const { httpPost } = useAPI()
    const { iniciarSessao } = useSessao()
    const router = useRouter()

    function alternarModo() {
        setModo(modo === 'login' ? 'cadastro' : 'login')
    }


    async function submeter() {
        if (modo === 'login') {
            await login()
        } else {
            await registrar()
            await login()
        }
        limparFormulario()
    }

    async function login() {
        const token = await httpPost('auth/login', { email, senha })
        iniciarSessao(token)
        router.push('/')
    }

    async function registrar() {
        await httpPost('auth/registrar', { nome, email, senha, telefone })
    }

    function limparFormulario() {
        setNome('')
        setEmail('')
        setSenha('')
        setTelefone('')
        setModo('login')
    }

    return {
        modo,
        nome,
        email,
        senha,
        telefone,
        alterarNome: setNome,
        alterarEmail: setEmail,
        alterarSenha: setSenha,
        alterarTelefone: setTelefone,
        alternarModo,
        submeter,
    }
}