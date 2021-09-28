//função trocar as imagens
function interruptor(filename, status){

                
          
     document.querySelector('.imagem').setAttribute('src','imagens/'+filename);
     document.querySelector('.imagem').setAttribute('data-status', status);

     

}

function carregarpagina(){
     document.querySelector('#consertada').disabled = true;
     document.querySelector('#desligado').disabled = true;


}


//Função para a lâmpada ligar
function ligada(){ 

     document.querySelector('#consertada').disabled = true;
     document.querySelector('#desligado').disabled = false;
     document.querySelector('#ligado').disabled = true;


}

//Função para quebrar a lampada
function quebrar(){ 

     document.querySelector('#ligado').disabled = true;
     document.querySelector('#desligado').disabled = true;
     document.querySelector('#consertada').disabled = false;
     document.querySelector('#quebrar').disabled = true;


}


//função para consertar a lâmpada
function consertar(){

     document.querySelector('#ligado').disabled = false;
     document.querySelector('#desligado').disabled = true;
     document.querySelector('#consertada').disabled = true;
     document.querySelector('#quebrar').disabled = false;

}

function desligar(){

     document.querySelector('#ligado').disabled = false;
     document.querySelector('#desligado').disabled = true;
     document.querySelector('#consertada').disabled = true;


}




//função mostrar um alerta informando o status da lâmpada
function statusLampada(){
let status = document.querySelector('.imagem').getAttribute('data-status');
alert("A lâmpada está "+status);
}

