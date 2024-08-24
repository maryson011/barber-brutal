import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { RegistrarUsuario, Usuario } from '@barbabrutal/core';
import { UsuarioRepositorio } from './usuario.repositorio';

@Controller('auth')
export class AuthController {

    constructor(private readonly repo: UsuarioRepositorio) {

    }

    @Post('login')
    async login() {
        return 'login'
    }

    @Post('registrar')
    async registrar(@Body() usuario: Usuario) {

        const usuarioExistente = await this.repo.buscarPorEmail(usuario.email)

        if (usuarioExistente) {
            throw new HttpException('Usuário já existente', 400)
        }
        await this.repo.salvar({...usuario, barbeiro: false})

        const CasoDeUso = new RegistrarUsuario()
        return await CasoDeUso.executar(usuario)
    }
}
