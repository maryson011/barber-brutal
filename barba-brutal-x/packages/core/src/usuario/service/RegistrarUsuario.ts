import CasoDeUso from "../../shared/CasoDeUso";

// DDD: Application Service = Caso de Uso = Fluxo da Aplicação
export default class RegistrarUsuario implements CasoDeUso {
    async executar(entrada: any): Promise<any> {
        return 'Deu certo!!'
    }
}