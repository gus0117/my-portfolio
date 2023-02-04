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
      showMainInfo()
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

const unitySvg = '<svg width="36" height="36" fill="none" stroke="#00ddfa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
                  '<path d="m18.5 20-6-.5M4 13h9.5H4Zm0 0 4 4.5L4 13Zm0 0 4-4.5L4 13Zm9.5 0 5-9-5 9Zm0 0 5 7-5-7Zm5-9-6 1 6-1Zm0 0L20 9.5 18.5 4Zm0 16 1.5-5.5-1.5 5.5Z"></path>'+
                  '</svg>'

const heartSvg = '<svg width="36" height="36" fill="#00ddfa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
                  '<path d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2Zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4Z"></path>'+
                  '</svg>'

const swordSvg = '<svg width="46" height="46" fill="none" stroke="#00ddfa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
                  '<path d="M8.5 6.5 12 2l3.5 4.5-2.5 13h-2l-2.5-13Z"></path>'+
                  '<path d="M8.5 19.5h7"></path>'+
                  '<path d="M12 19.5v3"></path>'+
                  '</svg>'

const shieldSvg = '<svg width="36" height="36" fill="#00ddfa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
                  '<path d="M22 2H2v12h2V4h16v10h2V2ZM6 14H4v2h2v-2Zm0 2h2v2h2v2H8v-2H6v-2Zm4 4v2h4v-2h2v-2h-2v2h-4Zm10-6h-2v2h-2v2h2v-2h2v-2Z"></path>'+
                  '</svg>'

const reactSvg = '<svg width="36" height="36" fill="#00ddfa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
                  '<path d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128.665.382.954 1.834.729 3.703-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533 23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538 14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03-.705 3.112-.392 5.588.988 6.38.318.186.69.274 1.1.274 1.346 0 3.107-.959 4.888-2.622 1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689zm-6.37-3.263a22.023 22.023 0 0 1-.66 1.932 26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387zm-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869 25.453 25.453 0 0 1-4.412.005 25.457 25.457 0 0 1-2.201-3.806 26.064 26.064 0 0 1 2.192-3.82 25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952zM16.97 13c.264.655.49 1.311.675 1.947-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13zm-4.96 5.22c-.455-.47-.91-.993-1.36-1.566.44.02.89.035 1.345.035.46 0 .915-.01 1.36-.035-.44.573-.895 1.096-1.345 1.566zm-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932.201.39.412.782.642 1.174.23.391.464.773.704 1.144zm3.615-10.18c.455.47.91.993 1.36 1.566-.44-.02-.89-.035-1.345-.035-.46 0-.915.01-1.36.035.44-.573.895-1.096 1.345-1.566zM8.365 8.04a27.02 27.02 0 0 0-1.34 2.333 20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386zm-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964 14.875 14.875 0 0 1-1.37-.499zm2.632 6.99c-.665-.38-.954-1.834-.729-3.702.054-.46.142-.945.25-1.439.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132zm11.604-3.727c.23 1.869-.054 3.322-.715 3.708-.146.088-.337.127-.562.127-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44 22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423zm1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475-.005.768-1.125 1.742-2.857 2.475z"></path>'+
                  '<path d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472 2.236 2.236 0 0 0 0 4.472z"></path>'+
                   '</svg>'


const javascriptSvg = '<svg width="36" height="36" fill="#00ddfa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
                      '<path fill-rule="evenodd" d="M0 0h24v24H0V0zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306 2.142 0 3.737-1.112 3.737-3.143 0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37 0-.547.42-.966 1.08-.966.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806-2.014 0-3.303 1.288-3.303 2.98 0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497 0 .646-.597 1.113-1.531 1.113zm-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06 1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416z" clip-rule="evenodd"></path>'+
                      '</svg>'
      
const showMainInfo = () => {

  //Perfil
  createElement("div", "main", "perfil-container", "perfil")
  const img = createElement("img", "perfil", "img-perfil")
  img.setAttribute("src", "./img/perfil3.jpg")
  img.setAttribute("alt", "Foto de perfil")
  const perfil = createElement("div","perfil","stats")
  perfil.innerHTML = "<div class='stat'>"+swordSvg+"<a class='external-link' target='_blank' href='https://github.com/gus0117'>Proyectos</a>"+"</div>"+"<div class='stat'>"+shieldSvg+"<a class='external-link' href='experiencie.html'>Experiencias</a>"+"</div>"+"<div class='stat'>"+heartSvg+"<p>Contacto</p>"+"</div>"

  const container = createElement("div", "main", "main-info", "container")
 
  //Descriptionw
  const hello = createElement("p","container", "hello", "hello", helloText)
  const myName = createElement("p", "container", "title-1", "my-name", myNameText)
  const title2 = createElement("p", "container", "title-2", "", title2Text)
  const desc = createElement("p", "container", "description", "", descriptionText)
  const link = createElement("a", "main", "r-btn-download", "", downloadText)
  link.setAttribute("href", "./files/Curriculum - Ordoñez, Gustavo Alberto - programador.pdf")
  link.setAttribute("download", "Curriculum-Ordoñez, Gustavo Alberto")
}