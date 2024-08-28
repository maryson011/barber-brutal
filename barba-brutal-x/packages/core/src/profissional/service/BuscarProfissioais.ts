import { Profissional } from "../../../dist";
import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioProfissional from "../provider/RepositorioProfissional";
// DDD: Application Service = Caso de Uso = Fluxo da Aplicação
export default class RegistrarUsuario implements CasoDeUso<void, Profissional[]> {
    constructor(
        private readonly repo: RepositorioProfissional,
    ) {}

    async executar(): Promise<Profissional[]> {
        return this.repo.buscarTodos();
    }
}