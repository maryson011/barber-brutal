import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarUsuario, Usuario } from '@barbabrutal/core';
import { UsuarioPrisma } from './usuario.prisma';
import { BcryptProvider } from './bcrypt.provider';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly repo: UsuarioPrisma,
    private readonly cripto: BcryptProvider,
) {}

  @Post('login')
  async login() {
    return 'login';
  }

  @Post('registrar')
  async registrar(@Body() usuario: Usuario) {
    const CasoDeUso = new RegistrarUsuario(this.repo, this.cripto);
    return await CasoDeUso.executar(usuario);
  }
}
