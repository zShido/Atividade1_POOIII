import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

enum ESTADO {
    SP,
    PR,
    SC,
    MT,
    MS,

}

enum TTELEFONE {
    Residencial,
    Pessoal,
}

enum SEXO {
    Masculino,
    Feminino,
    Indefinido,
}

let endereco1 : Endereco = new Endereco("Avenida Sebastiao", 1506, "Guarapuava", 1);
let produto1 : Produto = new Produto(1, "Camiseta Preta", 39.99);
let produto2 : Produto = new Produto(2, "Camiseta Branca", 49.99);
let produto3 : Produto = new Produto(3, "Tênis Adidas", 130.90)
let produto4 : Produto = new Produto(4, "Tênis Nike", 200.99)
let telefone1 : Telefone = new Telefone("15", 997227211, 1);
let telefone2 : Telefone = new Telefone("15", 32482466, 0);
let cliente1 : Cliente = new Cliente("Cauby", 51900759829, 131202, 0, endereco1, [telefone1, telefone2] );
let venda1 : Venda = new Venda(1, 10062023, cliente1, [produto1, produto2])
let venda2 : Venda = new Venda(2, 15072023, cliente1,[produto3, produto4])

console.log(venda1.calcularTotal());
console.log(venda2.calcularTotal());