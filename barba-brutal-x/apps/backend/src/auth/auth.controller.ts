import { Body, Controller, Post } from '@nestjs/common';
import Usuario from './usuario';
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
        await this.repo.salvar(usuario)
    }
}
