import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    public id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    public nome: string

    @IsEmail() // Decorador para forçar digitar um e-mail. 
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    public usuario: string

    @MinLength(8) // Decorador para forçar o usúario tenha no mínimo 8 caracteries 
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    public senha: string

    @Column({length: 5000 }) 
    public foto: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

}