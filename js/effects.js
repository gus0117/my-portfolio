/* $('.nav-link').click(() => {
    $('.active').removeClass('active')
    $('.text-green-active').removeClass('active')
    $(this).addClass('active')
    $(this).children('span').addClass('text-green-active')
}); */

//Typing effect
/* const txt = 'Gustavo Ordoñez';
var speed = 80;

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("my-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} */


//Links

//https://todoxampp.com/efecto-maquina-de-escribir-con-css/

//https://www.w3schools.com/howto/howto_js_typewriter.asp

//IDEA

//HAcer que aparezca un boton que haga que aparezca todo el texto.

// JS EFFECTS

document.getElementById("start").onclick = () => {
  document.getElementById("start").remove();
  createElement("p", "main", "loading", "loading", "Loading")
  createCounterPercent()
}

const createElement = (elementType, idParent, className="", idName="", content="") => {
  
  const node = document.createElement(elementType);

  // Create a text node:
  if(content !== ""){
    const textnode = document.createTextNode(content)
    // Append the text node to the "elementType" node:
    node.appendChild(textnode)
  }
 
  if(className !== ""){
    node.classList.add(className);
  }
  
  if(idName !== ""){
    node.setAttribute("id", idName);
  }

  document.getElementById(idParent).appendChild(node);
  
  return node;
}

const createCounterPercent = () => {
  const per = createElement("p", "main", "loading", "percent", "%")
  let percent = 0
  
  const counterPercent = () => {
    if(percent <= 100){
      per.innerHTML = percent + "%"
      percent++
      setTimeout(counterPercent, 15)
    }
    else {
      per.remove()
      document.getElementById("loading").remove()
      showInfo()
    }
  }
  counterPercent()
}

var helloText = "Hola mi nombre es"
var myNameText = "Gustavo Ordoñez"
var title2Text = "Hago proyectos webs y videojuegos."
var descriptionText = "Soy Programador de videojuegos en Unity 3D. " +
                      "También desarrollo páginas web y aplicaciones web con React."

var downloadText = "Descargar Currículum"

const showInfo = () => {
  const img = createElement("img", "main", "img-perfil")
  img.setAttribute("src", "./img/perfil3.jpg")
  img.setAttribute("alt", "Foto de perfil")

  const container = createElement("div", "main", "main-info", "container")
 
  const hello = createElement("p","container", "hello", "hello", helloText)
  const myName = createElement("p", "container", "title-1", "my-name", myNameText)
  const title2 = createElement("p", "container", "title-2", "", title2Text)
  const desc = createElement("p", "container", "description", "", descriptionText)
  const link = createElement("a", "main", "r-btn-download", "", downloadText)
  link.setAttribute("href", "./files/Curriculum - Ordoñez, Gustavo Alberto - programador.pdf")
  link.setAttribute("download", "Curriculum-Ordoñez, Gustavo Alberto")
}

