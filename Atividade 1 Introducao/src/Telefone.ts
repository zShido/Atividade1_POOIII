enum TTELEFONE {
    Residencial,
    Pessoal,
}

export default class Telefone{
    private _ddd : string;
    private _numero : number;
    private _tipo : TTELEFONE;

    constructor(ddd : string, numero : number, tipo : TTELEFONE){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    get ddd() : string{
        return this._ddd;
    }

    get numero() : number{
        return this._numero
    }

    get tipo() : TTELEFONE{
        return this._tipo
    }

    set ddd(ddd : string){
        this._ddd = ddd;
    }

    set numero(numero : number){
        this._numero = numero;
    }

    set tipo(tipo : TTELEFONE){
        this._tipo = tipo
    }
}