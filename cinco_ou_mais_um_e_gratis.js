function solucao(precos) {
    let sub = precos[0];
 let cont = 0;
 
   for(let i = 0; i < precos.length; i++){
     if(precos.length >= 5){
       if(sub >= precos[i]){
         sub = precos[i];
       }
     }
     cont += precos[i]
     
   }
   if(precos.length >= 5){
     console.log(cont-sub);

   }else{
     console.log(cont);

   }
   
}

function processData(input) {
   solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
   _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});