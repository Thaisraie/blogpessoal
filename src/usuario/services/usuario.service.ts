import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt // injetando o objeto da classe auth para criptografar a senha.
    ) { }

    // Método para buscar o e-mail do usúario se existe ou não.
    // será usado apenas na security.
    async findByUsuario(usuario: string): Promise<Usuario | undefined> {
        return await this.usuarioRepository.findOne({
            where: {
                usuario: usuario
            }
        })
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find(
            {
                relations:{
                    postagem: true
                }
            }
        );
    }

    async findById(id: number): Promise<Usuario> {

        let usuario = await this.usuarioRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true
            }
        });

        if (!usuario)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;
    }

    // Método checa se o usúario existe 
    async create(usuario: Usuario): Promise<Usuario> {
        
        let buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (!buscaUsuario) {
            usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
            return await this.usuarioRepository.save(usuario);
        }

        throw new HttpException("O Usuario ja existe!", HttpStatus.BAD_REQUEST);
    }

    async update(usuario: Usuario): Promise<Usuario> {

        if(!usuario.id)
            throw new HttpException("Por favor, informar o Id", HttpStatus.BAD_REQUEST);

        // Checagem de Id e e-mail se pertence ao mesmo usúario para atualizar.
        let updateUsuario: Usuario = await this.findById(usuario.id);
        let buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (!updateUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        if (buscaUsuario && buscaUsuario.id !== usuario.id)
            throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);
    }
}