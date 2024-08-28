import { Module } from '@nestjs/common';
import { ProfissionalController } from './profissional.controller';
import { ProfissionalPrisma } from './profissional.prisma';

@Module({
  controllers: [ProfissionalController],
  providers: [ProfissionalPrisma]
})
export class ProfissionalModule {}
