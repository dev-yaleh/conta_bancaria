import { Conta } from "./Conta"

export class ContaCorrente extends Conta {

    // Atributo
    private _limite: number

    // Método Constructor
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number){
        super(numero, agencia, tipo, titular, saldo)
        this._limite = limite
    }

    // Método Get e Set
    public get limite(){
        return this._limite
    }

    public set limite(limite: number){
        this._limite = limite
    }

    // Métodos Específicos
    public sacar(valor: number): boolean {
        if((this.saldo + this._limite) < valor){
        console.log("\nSaldo Insuficiente!")
        return false
        }

        this.saldo = this.saldo - valor
        return true
    }

    public visualizar(): void {
        super.visualizar()
        console.log("limite: " + this._limite.toFixed(2))
    }

}