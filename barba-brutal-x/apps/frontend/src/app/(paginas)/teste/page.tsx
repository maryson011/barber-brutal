'use client'
import useSessao from "@/data/hooks/useSessao"

export default function PaginaTeste() {
    const {usuario} = useSessao()
    return (
        <div>
            <span>{usuario?.nome}</span>
            <span>{usuario?.email}</span>
        </div>
    )
}