const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_copiar");
const todosCursos =[ ... document.querySelectorAll(".curso") ] ; 

todosCursos.map((e)=>{

e.addEventListener("click", (evt)=>{

    const curso = evt.target
    
    curso.classList.toggle("selecionado")
})

})

btn.addEventListener("click", ()=>{
    const selecionados =[ ... document.querySelectorAll(".selecionado") ]
    const naoSelecioando = [...document.querySelectorAll(".curso:not(.selecionado)")]
    // console.log(selecionados)
    selecionados.map((el)=>{caixa2.appendChild(el)})
    naoSelecioando.map((e)=>(caixa1.appendChild(e)))
})