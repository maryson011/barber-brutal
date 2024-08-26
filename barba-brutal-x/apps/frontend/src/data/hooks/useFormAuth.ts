import { useState } from "react"
import useAPI from "./useAPI"

export default function useFormAuth() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')

    const { httpPost } = useAPI()

    function alternarModo() {
        setModo(modo === 'login' ? 'cadastro' : 'login')
    }


    async function submeter() {
        if (modo === 'login') {
            const token = await httpPost('auth/login', { email, senha })
            console.log(token)
            limparFormulario()
        } else {
            await httpPost('auth/registrar', { nome, email, senha, telefone })
            limparFormulario()
        }
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