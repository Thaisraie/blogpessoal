import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'

@Injectable() // Decorador pois essa classe sera usada na hora de criar um usúario, atualizar e na hora de logar.
export class Bcrypt{

    async criptografarSenha(senha: string): Promise<string>{

        let saltos: number = 10
        return await bcrypt.hash(senha, saltos); // Método hash serve para criptografar. 
    }

     // Método compara a senha digitada com a senha criptografada.
    async compararSenhas(senhaBanco: string, senhaDigitada: string): Promise<boolean>{
    
        return bcrypt.compareSync(senhaDigitada, senhaBanco); 
    }
}