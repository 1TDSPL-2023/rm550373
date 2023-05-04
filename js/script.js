//diferença var , let e const

//CONST >
//1 REGRA: Na declaração você é obrigado a inicializar a constante
//2 REGRA: Não se pode alterar o conteudo de uma const. durante o fluxo do programa
// const PI = 3.14;


//VAR E LET
// var nome = "Mariana";
// let nome2 = "Matheus";

// if(nome != ""){
//     var nome = "Leonardo";

// }

// console.log(nome);




// //Atrelando o evento click ao elemento h2
// const h2Element = document.getElementById("titulo");
// //Math funvao matematica...
// //os metodos floor, round, ceil arredondam os numeros
// //o metodo random retorna um numero entre 0 e 1. Ex:  0.1 ; 0.2
// h2Element.addEventListener( "click", ()=>{
//     let r = ""
//     let g = ""
//     let b = ""

//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);

//     // h2Element.setAttribute("style", "color:rgb("+r+","+g+","+b+");
//     h2Element.setAttribute("style", `color:rgb(${r}, ${g}, ${b});`);
//     h2Element.textContent = "Novo Titulo"    
    
// });


// let fruta = "Melão";
// console.log(fruta);

//ARRAY Sao collections
// let frutas = ["Uva","pera","Melancia"];
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log("Tamano do Array: " + frutas.length);


//adiccionando um novo elemento no final do array
///utilizando o metodo push
// frutas.push("Banana");
// frutas.push("Laranja");
// // console.log(frutas)
// console.table(frutas);

//removendo um item do final do array com o metodo pop();

// frutas.pop();
// console.log(frutas);

//removendo um item do inicio da array usando shift

// frutas.shift();
// console.table(frutas);


//Adicionando elemento no inicio da array
//Utilizando o metodo unshift(item);
// frutas.unshift("Maracujá");
// frutas.unshift("Kiwi");

// console.table(frutas)


//realizar uma busca de um item no aarray uttilizando o metodo indexOf

// let indice = frutas.indexOf("pera")
// console.log(frutas[indice]);

 //Removendo item atraves do indice do array com o metodo splice(indicie , ) 

//  let indice = frutas.indexOf("pera");
//  frutas.splice(indice, 1)
//  console.table(frutas);


//Iterando Arrays

// let frutas = ["uva","laranja","banana","maçã","kiwi","abacate"];

// console.log(`Minhas Frutas: ${frutas}`);

// frutas.forEach((fruta)=>{
//     console.log(fruta);
// });

