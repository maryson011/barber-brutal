import Profissional from "../model/Profissional";

export default interface RepositorioUsuario {
    buscarTodos(): Promise<Profissional[]>
}