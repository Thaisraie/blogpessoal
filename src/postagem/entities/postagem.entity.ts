import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


// Classe para verificar o Modelo de dados ou validação.
@Entity({name: "tb_postagem"})
export class Postagem{

    @PrimaryGeneratedColumn() // Chave primária e Auto_Increment
    id: number;

    @IsNotEmpty() // Não aceita espaço em branco.
    @Column({length: 100, nullable: false}) // Tamanho da postagem e definir que é obrigatório.
    titulo: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    texto: string;

    @UpdateDateColumn() // atualizar data automáticamentw.
    date: Date;

}