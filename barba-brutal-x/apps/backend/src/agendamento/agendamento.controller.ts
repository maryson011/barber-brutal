import { Usuario } from '@barbabrutal/core';
import { Controller, Get } from '@nestjs/common';
import { UsuarioLogado } from 'src/shared/usuario.decorator';

@Controller('agendamentos')
export class AgendamentoController {
    @Get()
    test(@UsuarioLogado() usuario: Usuario) {
        return `Agendamento para ${usuario.nome}`
    }
}
