const prompt = require('prompt-sync')({sigint: true});
   const QUANTIDADENOTAS = 3;
   nota=[];
   console.log("Insira as 3 notas: ");
   for(let contador = 0; contador<QUANTIDADENOTAS; contador++){
     nota[contador] = parseInt(prompt(`${contador+1}ª Nota: `));
   }
   let opcao = prompt("Opção 'a = aritmética' 'p = ponderada' 'h= harmonica': ");
   switch(opcao){
     case "a":
         console.log(mediaAritmetica(nota).toFixed(2));
     break;
     case "p":
         console.log(ponderada(nota).toFixed(2));
     break;
     case "h":
         console.log(harmonica(nota).toFixed(2));
     break;
     default:
       console.log("Opção inválida!");
     break;
   }
 function mediaAritmetica(nota){
         let media = nota.reduce((total, i)=>(total+i));
         media = media/QUANTIDADENOTAS;
         return media;
 }
 function ponderada(nota){
         let media = ((nota[0]*5)+(nota[1]*3)+(nota[2]*2));
         media = media;
         return media;
 }
 function harmonica(nota){
       let media = QUANTIDADENOTAS / ((1/nota[0])+(1/nota[1])+(1/nota[2]));
       media = media;
       return media;
 }
