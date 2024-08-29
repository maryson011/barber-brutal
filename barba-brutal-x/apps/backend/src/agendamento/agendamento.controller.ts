import { Usuario } from '@barbabrutal/core';
import { Agendamento, NovoAgendamento } from '@barbabrutal/core';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioLogado } from 'src/shared/usuario.decorator';
import { AgendamentoPrisma } from './agendamento.prisma';

@Controller('agendamentos')
export class AgendamentoController {
    constructor(private readonly repo: AgendamentoPrisma) {}
    
    @Post()
    async novoAgendamento(
        @Body() agendamento: Agendamento,
        @UsuarioLogado() usuario: Usuario,
    ) {
        const casoDeUso = new NovoAgendamento(this.repo)
        await casoDeUso.executar({ agendamento, usuario} )
    }
    
    
    @Get()
    test(@UsuarioLogado() usuario: Usuario) {
        return `Agendamento para ${usuario.nome}`
    }


}
