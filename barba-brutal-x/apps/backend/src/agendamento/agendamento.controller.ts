import { Usuario } from '@barbabrutal/core';
import { Agendamento, NovoAgendamento, BuscarAgendamentosCliente } from '@barbabrutal/core';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioLogado } from 'src/shared/usuario.decorator';
import { AgendamentoPrisma } from './agendamento.prisma';

@Controller('agendamentos')
export class AgendamentoController {
    constructor(private readonly repo: AgendamentoPrisma) {}
    
    @Post()
    async novoAgendamento(
        @Body() dados: Agendamento,
        @UsuarioLogado() usuario: Usuario,
    ) {
        const agendamento: Agendamento = { ...dados, data: new Date(dados.data) }
        const casoDeUso = new NovoAgendamento(this.repo)
        await casoDeUso.executar({ agendamento, usuario} )
    }
    
    
    @Get()
    buscarAgendamentoCliente(@UsuarioLogado() usuario: Usuario) {
        const casoDeUso = new BuscarAgendamentosCliente(this.repo)
        return casoDeUso.executar(usuario)
    }


}
