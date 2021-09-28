//função para a div ficar azul
function azul(){ 
     document.querySelector('.conteiner').classList.remove('verde');
     document.querySelector('.conteiner').classList.remove('vermelho');
     document.querySelector('.conteiner').classList.add('azul');

}

//função para a div ficar vermelho
function vermelho(){
     document.querySelector('.conteiner').classList.remove('verde');
     document.querySelector('.conteiner').classList.remove('azul');
     document.querySelector('.conteiner').classList.add('vermelho');


}

//função para a div ficar verde
function verde(){
     document.querySelector('.conteiner').classList.remove('azul');
     document.querySelector('.conteiner').classList.remove('vermelho');
     document.querySelector('.conteiner').classList.add('verde');

}

//função para o botão alternar de cores
function trocar(){
     if (document.querySelector('#botao').classList.contains('preto')){
          document.querySelector('#botao').classList.remove('preto');
          document.querySelector('#botao').classList.add('verde');
          document.querySelector('#botao').innerText = 'Verde';
          
          

     } else {

     document.querySelector('#botao').classList.remove('verde');
     document.querySelector('#botao').classList.add('preto');
     document.querySelector('#botao').innerText = 'Preto';
     
     

     }
}

//função somar
function somar(x, y){
     let total = x + y;
          
     return total;
     
}


//função trocar imagem
function interruptor(filename, status){

                
          
          document.querySelector('.imagem').setAttribute('src','imagens/'+filename);
          document.querySelector('.imagem').setAttribute('data-status', status);

          
     
}

function ligada(){ 
     
     document.querySelector('#concertada').disabled = true;
     

}

function quebrar(){ 
     
     document.querySelector('#ligado').disabled = true;
     document.querySelector('#desligado').disabled = true;
     document.querySelector('#concertada').disabled = false;
     

}



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

