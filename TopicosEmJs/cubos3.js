

function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
   
  let itens = [... itensColetados]
  let var1 = itens.includes(itemNecessario1);
  let var2 = itens.includes(itemNecessario2);
  let var3 = itens.includes(itemNecessario3)

  if (var1 && var2 && var3){
        return "PODE ENFRENTAR"
  } else{
    return "NAO PODE ENFRENTAR"
  }


}

let coletados = ["casa", "cobra", "rato", "lobo"]

console.log(solucao(["espada","escudo","metralhadora", "capa","magia"],"magia","metralhadora","espada"))

