import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";


// Classe para verificar o Modelo de dados ou validação.
@Entity({name: "tb_postagens"}) // O decorador: Entity cria a tabela no banco de dados. Informar o nome da tabela a ser criada, caso contrário a tabela é criada com o nome da classe. 
export class Postagem{

    @ApiProperty()
    @PrimaryGeneratedColumn() // Chave primária e (GeneratedColumn) é o Auto Increment.
    id: number;

    // Validação para espaços em branco. 
    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty() // Não aceita espaço em branco.
    @Column({length: 100, nullable: false}) // Tamanho da postagem e definir que é obrigatório.
    titulo: string;

    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @ApiProperty()
    @UpdateDateColumn() // atualizar data automáticamentw.
    date: Date;

    // Classe postagem com duas chaves estramgeiras sendo, 01 relacionado a tema a outra relacionado com o usúario.
    @ApiProperty({ type: () => Tema }) 
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema; // Chave Estrangeira

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}
