$(document).ready(function() {
   var fiveSeconds = new Date().getTime() + 5000;
   $('#clock').countdown(fiveSeconds, {elapse: true})
    .on('update.countdown', function(event) {
    var $this = $(this);
    $this.html(event.strftime('To end: <span>%H:%M:%S</span>'));
  });
  $('#card').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#carddos').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#cardtres').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#cardcuatro').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#cardcinco').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#cardseis').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#cardsiete').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#cardocho').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#cardnueve').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#carddiez').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
});

var parejas = 0;
var giro = 'ninguna';
var numeroGiro = 0;
var acierto;

function carta(enlace, tip) {
  var fruta = tip;
  console.log(fruta);
  console.log(giro);
  numeroGiro++;
  if(parejas <= 5) {
    if((numeroGiro == 2) && (fruta = giro)) {
      console.log("Acierto");
      enlace.disabled = true;
      acierto.disabled = true;
      numeroGiro = 0;
      parejas++;
    }
    else {
      if(numeroGiro == 2) {
        numeroGiro = 0;
      }else {
        giro = fruta;
        acierto = enlance;
      }
    }
  }
}
