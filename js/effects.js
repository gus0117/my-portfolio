/* const linksContainer = document.getElementById("navlinks")
const navLinks = []

for(let i=0; i < linksContainer.children.length; i++){
    navLinks.push({})
}

 */
const navigation = {
    abo:'about',
    exp:'experiencie',
    pro:'projects',
    con:'contact'
}

var currentId = "abo"
var currentLink = document.getElementById(currentId)
var currentSection = document.getElementById(navigation[currentId])


function clickMenuItem(linkId){
    //Desaparecer
    currentLink.classList.remove("selected")
    currentSection.classList.add("hide")
    
    //Aparecer
    const linkItem = document.getElementById(linkId)
    linkItem.classList.add("selected")

    const section = document.getElementById(navigation[linkId])
    section.classList.remove("hide")

    //Reasignar
    currentLink = document.getElementById(linkId)
    currentSection = document.getElementById(navigation[linkId])
    
}