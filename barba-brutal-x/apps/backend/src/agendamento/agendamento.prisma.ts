import { Agendamento, RepositorioAgendamento } from '@barbabrutal/core/src/agendamento';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class AgendamentoPrisma implements RepositorioAgendamento {
    constructor(private readonly prisma: PrismaService) {}

    async criar(agendamento: Agendamento): Promise<void> {
        await this.prisma.agendamento.create({
            data: {
                data: agendamento.data,
                usuario: {connect: { id: agendamento.usuario.id }},
                profissional: {connect: { id: agendamento.profissional.id }},
                servicos: {
                    connect: agendamento.servicos.map((servico) => ({ id: servico.id }))
                },
            },
        })
    }

    async buscarPorId(id: number): Promise<Agendamento | null> {
        return await this.prisma.agendamento.findUnique({
            where: { id },
            include: {
                usuario: true,
                profissional: true,
                servicos: true,
            },
        })
    }

    async buscarPorEmail(email: string): Promise<Agendamento[]> {
        return await this.prisma.agendamento.findMany({
            where: {usuario: { email }, data: { gte: new Date() } },
            include: {
                usuario: true,
                profissional: true,
                servicos: true,
            },
            orderBy: { data: 'desc' }
        })
    }

    async buscarPorProfissionalEData(profissional: number, data: Date): Promise<Agendamento[]> {
        const ano = data.getFullYear()
        const mes = data.getUTCMonth()
        const dia = data.getUTCDate()

        const inicioDoDia = new Date(ano, mes, dia, 0, 0, 0)
        const fimDia = new Date(ano, mes, dia, 23, 59, 59)

        return await this.prisma.agendamento.findMany({
            where: {
                profissionalId: profissional,
                data: { gte: inicioDoDia, lte: fimDia },
            },
            include: {
                usuario: true,
                servicos: true,
                profissional: true,
            },
        })
    }

    async excluir(id: number): Promise<void> {
        await this.prisma.agendamento.delete({
            where: { id },
            include: { servicos: true }
        })
    }
}
