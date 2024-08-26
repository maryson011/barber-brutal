'use client'
import { Usuario } from "@barbabrutal/core";
import { createContext } from "react";

interface ContextoSessaoProps {
    usuario: Usuario | null
}

const ContextoSessao = createContext<ContextoSessaoProps>({} as any)
export default ContextoSessao

export function ProvedorSessao(props: any) {
    return <ContextoSessao.Provider 
        value={{
            usuario: {
                id: 10,
                nome: 'Leonardo Leitão',
                email: 'leonardo@email'
            }
    }}>{props.children}</ContextoSessao.Provider>
}