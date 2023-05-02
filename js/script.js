//Atrelando o evento click ao elemento h2
const h2Element = document.getElementById("titulo");
//Math funvao matematica...
//os metodos floor, round, ceil arredondam os numeros
//o metodo random retorna um numero entre 0 e 1. Ex:  0.1 ; 0.2
h2Element.addEventListener( "click", ()=>{
    let r = ""
    let g = ""
    let b = ""

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    // h2Element.setAttribute("style", "color:rgb("+r+","+g+","+b+");
    h2Element.setAttribute("style", `color:rgb(${r}, ${g}, ${b});`);
    h2Element.textContent = "Novo Titulo"    
    
});