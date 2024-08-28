import { Module } from '@nestjs/common';
import { ServicoController } from './servico.controller';
import { ServicoPrisma } from './servico.prisma';

@Module({
  controllers: [ServicoController],
  providers: [ServicoPrisma]
})
export class ServicoModule {}
