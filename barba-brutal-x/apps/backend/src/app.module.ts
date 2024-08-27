import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [AuthModule, DbModule, AgendamentoModule],
  controllers: [AppController],
})
export class AppModule {}
