function solucao(pesos) {

    let diferencaPeso = Math.abs(pesos[0]-pesos[1]);

    if(diferencaPeso<=5){
        return "PODEM LUTAR";
            }

    else{

        return "NAO PODEM LUTAR";

    }

}

console.log(solucao([26,20]))
