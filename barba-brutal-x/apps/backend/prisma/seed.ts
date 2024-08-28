import { Usuario } from "@barbabrutal/core"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
    "11111"
    const senha = '$2b$10$Pc/owO5O8DAbjqce22fnF.XCJbK0zDypbF4z3VOb.K91K.bzYRVO2'

    const usuarios: Usuario[] = [
        {
            nome: 'luana',
            email: 'lu@email.com',
            senha,
            telefone: '(11) 99999-9999',
            barbeiro: true,
        },
        {
            nome: 'Maryson',
            email: 'email@zmail.com',
            senha,
            telefone: '(11) 99999-9999',
            barbeiro: true,
        },
    ]

    await prisma.usuario.deleteMany()
    await prisma.usuario.createMany({ data: usuarios as any })
}

seed()