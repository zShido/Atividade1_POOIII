import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda{
    private _codigoV : number;
    private _data : number;
    private _cliente : Cliente;
    private _produtos : Produto[];

    constructor(codigoV : number, data : number, cliente : Cliente, produtos : Produto[]){
        this._codigoV = codigoV;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;

    }

    get codigoV() : number{
        return this._codigoV;
    }

    get data() : number{
        return this._data;
    }

    get cliente() : Cliente{
        return this._cliente;
    }

    get produtos() : Produto[]{
        return this._produtos
    }

    set codigoV(codigoV : number){
        this._codigoV = codigoV;
    }

    set data(data : number){
        this._data = data;
    }

    set cliente(cliente : Cliente){
        this._cliente = cliente;
    }

    set produtos(produtos : Produto[]){
        this._produtos = produtos;
    }

    calcularTotal(): number {
        let total = 0;
    
        for (const produto of this._produtos) {
          total += produto.valor;
        }
        
        console.log("A valor da venda foi de R$: ");
        return total;
      }
   
    }
