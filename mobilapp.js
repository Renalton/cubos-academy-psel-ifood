function solucao(tempo, distancia) {
	if(tempo < 5){
    console.log(6 * 100)
  }else if(tempo >= 5 && tempo <= 60){
    console.log((tempo*100) + (distancia *50));
  }else if(distancia < 100){
    console.log(distancia * 200);
  }else{
    console.log(distancia * 150);
  }

}

function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
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