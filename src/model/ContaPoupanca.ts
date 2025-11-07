import { Conta } from "./Conta"

export  class ContaPoupanca extends Conta{

    // Atributo
    private _aniversario: number

    // Método Constructor
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number){
        super(numero,agencia,tipo,titular,saldo)
        this._aniversario = aniversario
    }

    // Método Get e Set
      public get aniversario() {
        return this._aniversario;
    }

    public set aniversario(aniversario: number) {
        this._aniversario = aniversario;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Dia do aniversário: " + this._aniversario);
    }


}