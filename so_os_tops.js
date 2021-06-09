const  resposta = {
    totalTop:  0,
    percentual:  0
  };
  let total = 0;
  function solucao(produtos) {
    
    for(let i = 0; i < produtos.length; i++){
      if(produtos[i].preco > 10000){
        resposta.totalTop += produtos[i].preco;
      }
      total += produtos[i].preco;
    }
    resposta.percentual = ((resposta.totalTop)/total);
    
   console.log(resposta);
  
  
      
  }
  
  function processData(input) {
      solucao(JSON.parse(input));
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