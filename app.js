$(window).on('scroll',function(){
  //efecto1 en este efecto solo cambiamos la opacidad
  var scrolled = $(this).scrollTop();
  $('.efect1').css({
    'transform': 'translateY(' + (scrolled * 0.20) + 'px)',/**Afectamos la posición del titulo al hacer scroll*/
    'opacity':1 - scrolled / 200
  });

  //efecto2
  var descubrir = document.getElementById('descubrir');
  d = descubrir.getBoundingClientRect().top - 300;/*esto lo unico que hace es acortar distancia del top*/
  $('.efecto2').css({/*Afectamos el css*/
    'transform':'translateY('+ (-d * .20) + 'px)',/*afectamos la posicion de y*/
    'opacity':1 - d / 400
  });

  //efecto3
  var surfing = document.getElementById('surfing');
  d = surfing.getBoundingClientRect().top - 100;
  $('.efecto3').css({
    'transform':'translateY('+ (d * .30) + 'px)',
    'opacity':1 -d / 900
  });

  //efecto4
  var esahora = document.getElementById('esahora');
  d = esahora.getBoundingClientRect().top - 100;/*Practicamente es obtener la posicion en Y*/
  $('.efecto4').css({
    'transform':'translate3d(0, ' + (d * .30) + 'px,0)',
    'opacity':1 - d / 900
  });
})

