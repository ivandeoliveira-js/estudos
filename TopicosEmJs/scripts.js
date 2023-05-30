
let procuraVogais = (vogais)=>{
    let res= '';
    let v = [...vogais].sort(); 
    const vogal = ['a', 'e','i','o','u'];


    for (let i in v){
        if (vogal.includes(v[i])){
            res += v[i]+"\n";
        }
    }

    return res; 

}

let procuraConsoantes = (vogais)=>{
    let res= '';
    let v = [...vogais].sort(); 
    const vogal = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

    for (let i in v){
        if (vogal.includes(v[i])){
            res += v[i]+"\n";
        }
    }

    return res; 

}

let analisaString = (str) => {
    return procuraVogais(str)+procuraConsoantes(str);

}

console.log(analisaString("aaabbeelli"))
console.log("---------------")

const x = [1,2,3,4,5,6]
let y = x.find(2);
console.log(y)