import CasoDeUso from "../../shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "../provider/RepositorioUsuario";

// DDD: Application Service = Caso de Uso = Fluxo da Aplicação
export default class RegistrarUsuario implements CasoDeUso {
    constructor(private readonly repo: RepositorioUsuario) {}

    async executar(usuario: Usuario): Promise<any> {
        const usuarioExistente = await this.repo.buscarPorEmail(usuario.email);

        if (usuarioExistente) {
            throw new Error('Usuário já existente');
        }
        await this.repo.salvar({ ...usuario, barbeiro: false });
    }
}