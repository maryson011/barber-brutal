import { Controller, Get } from '@nestjs/common';

@Controller('agendamento')
export class AgendamentoController {
    @Get()
    test() {
        return 'teste agendamento'
    }
}
