import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


// Classe para verificar o Modelo de dados ou validação.
@Entity({name: "tb_postagens"}) // O decorador: Entity cria a tabela no banco de dados. Informar o nome da tabela a ser criada, caso contrário a tabela é criada com o nome da classe. 
export class Postagem{

    @PrimaryGeneratedColumn() // Chave primária e (GeneratedColumn) é o Auto Increment.
    id: number;

    // Validação para espaços em branco. 
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty() // Não aceita espaço em branco.
    @Column({length: 100, nullable: false}) // Tamanho da postagem e definir que é obrigatório.
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // atualizar data automáticamentw.
    date: Date;

}