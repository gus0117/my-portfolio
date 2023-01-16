/* $('.nav-link').click(() => {
    $('.active').removeClass('active')
    $('.text-green-active').removeClass('active')
    $(this).addClass('active')
    $(this).children('span').addClass('text-green-active')
}); */


//Typing effect

var i = 0;
var txt = 'Gustavo Ordoñez';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("my-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

//Links

//https://todoxampp.com/efecto-maquina-de-escribir-con-css/

//https://www.w3schools.com/howto/howto_js_typewriter.asp

//IDEA

//HAcer que aparezca un boton que haga que aparezca todo el texto.