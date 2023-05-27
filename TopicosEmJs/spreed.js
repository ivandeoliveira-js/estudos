/**
 * Traz o conceito de espalhar
 * É muito útil em algumas operações como por exemplo:
 * Soma de todos os elementos de um array em uma função
 * retorna um objeto, quando por definição o retorno é uma coleção de elementos html (retorno 
 * do queryselector) 
 */

let numeros = [1,1,1]
let numeros2 = [1,1,1]



let soma = (v1,v2) => {
    return v1+v2; 
}


console.log(soma (...numeros, ...numeros2))

/**
 * função rest (usa spred e tem numero ilimitado de parametros)
 */


const somaSpread = (...v1) => {

    let soma = 0;
    for (let n of v1){
        soma+=n;
            }
    return soma
}


console.log(somaSpread(...numeros))

console.log("----------Usando o map em arrays --------------")

const transporte=["carro", "ônibos", "trem", "balsa"]

transporte.map((x,y)=>{
    console.log(x+" : "+y)
}
)

