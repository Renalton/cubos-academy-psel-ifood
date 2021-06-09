function solucao(ano) {
    let i = 0;
    let resultado = 2018;
      if((ano % 2) === 0){
       for(i =0; i <= (ano-2021)  ; i++){
        
         if((resultado ) == ano){
           console.log("COPA");
           break;
         }else if( (i == (ano-2021)) && (resultado !== ano)){
           console.log("JOGOS");
           break;
         }
         resultado += 4;
        
       }
        
        
       }
     
     else{
       console.log("MEH");
     }
   }
   
   function processData(input) {
       solucao(parseInt(input, 10));
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