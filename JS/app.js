var correo = document.getElementById("correo"); 
var mensaje = document.getElementById("mensaje");
var phone = document.getElementById("phone");
var fullName = document.getElementById("fullName");
var identification = document.getElementById("identification");
var send = document.getElementById("send");
var enviar = document.getElementById("enviar")
var foto = document.getElementById("foto-perfil");
var cancion = document.getElementById("cancion");
var video = document.getElementById("video");

send.addEventListener('click' , (e) =>{
    e.preventDefault();
    console.log(correo.value);
    console.log(phone.value);
    console.log(identification.value);
    console.log(fullName.value);
    

});

enviar.addEventListener('click' , (e) =>{
    e.preventDefault();
    console.log(mensaje.value);


});



var estado = 0;
function playMusic () {
    if (estado == 0) {
     cancion.play();
        estado +=1;
}  
    else {
    cancion.pause();
    estado -= 1;
}  

}
foto.addEventListener('click' , playMusic);

var estado = 0;
function playVideo () {
    if (estado == 0){
    video.play();
    estado +=1;
}

else{
    video.pause();
    estado -= 1;
}

}
video.addEventListener('click' , playVideo);

$(document).ready(function(){
    $("#mensaje").click(function(){
      var div = $("#mensaje");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  
});