//função trocar as imagens
function interruptor(filename, status){

                
          
     document.querySelector('.imagem').setAttribute('src','imagens/'+filename);
     document.querySelector('.imagem').setAttribute('data-status', status);

     

}

//Função para a lâmpada ligar
function ligada(){ 

     document.querySelector('#concertada').disabled = true;


}

//Função para quebrar a lampada
function quebrar(){ 

     document.querySelector('#ligado').disabled = true;
     document.querySelector('#desligado').disabled = true;
     document.querySelector('#concertada').disabled = false;


}


//função para concertar a lâmpada
function concertar(){

     document.querySelector('#ligado').disabled = false;
     document.querySelector('#desligado').disabled = false;
     document.querySelector('#concertada').disabled = false;

}





//função mostrar um alerta informando o status da lâmpada
function statusLampada(){
let status = document.querySelector('.imagem').getAttribute('data-status');
alert("A lâmpada está "+status);
}

