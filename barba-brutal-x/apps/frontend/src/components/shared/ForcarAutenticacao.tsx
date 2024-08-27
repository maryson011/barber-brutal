'use client'
import useSessao from "@/data/hooks/useSessao"
import { usePathname, useRouter } from "next/navigation"

export default function ForcarAutenticacao(props: any) {
    const { usuario, carregando } = useSessao()
    const router = useRouter()
    const caminho = usePathname()

    if (carregando && !usuario?.email) <div>Carregando...</div>
    if (!usuario?.email) {
        router.push(`/entrar?destino=${caminho}`)
        return <div>Redirecionando...</div>
    }

    return props.children
}