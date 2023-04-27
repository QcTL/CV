function changeCardProjects(nameProject, lenProject, description, link){
    document.getElementById('cart-project-name').innerHTML = nameProject;
    document.getElementById('cart-project-len').innerHTML = lenProject;
    document.getElementById('cart-project-disc').innerHTML = description;

    if (link != ""){
        document.getElementById('cart-project-link').setAttribute("href", link);
        document.getElementById('cart-project-link').innerHTML = "Link Project";
    }else{
        document.getElementById('cart-project-link').setAttribute("href", "");
        document.getElementById('cart-project-link').innerHTML = "";
    }
}

function loadFuntionsStart(){
    window.onresize = reloadMenuHieghtApear;
    changeLanguage("cat");
    reloadMenuHieghtApear();
}

function reloadMenuHieghtApear(){
    menuNav = document.getElementById('menu-nav');
    mainScreen = document.getElementById('center-topCard');
    
    var endofMainScreen =  mainScreen.getBoundingClientRect().height;
    
    var scrollToShow = function(){
        if(window.scrollY > endofMainScreen){
            menuNav.className = "menuAppear";   
        }else{
            menuNav.className = "menuDisabled";
        }
    }
    window.addEventListener("scroll", scrollToShow); 
}

function onSummitForm(){
    alert("The e-mail was sent correctly");
}


dirText = {
    "txt-ComputerEngineer-cat" : "Enginyer Informàtic",
    "txt-ComputerEngineer-eng" : "Computer Engineer ",
    "txt-ProgramingLanguages-cat" : "Llenguatges de Programació",
    "txt-ProgramingLanguages-eng" : "Programing Languages",
    "txt-AboutMe-cat" : "Qui soc",
    "txt-AboutMe-eng" : "About Me",
    "txt-ContactMe-cat": "On trobar-me",
    "txt-ContactMe-eng": "Contact Me",
    "txt-Contact-Form-cat": "Posem-nos en contacte",
    "txt-Contact-Form-eng": "Contact",
    "txt-aboutMe-maintext-cat": "Sempre buscant com trobar una solució simple i escalable. Amb experiència amb programació modular i orientada amb objectes, sempre dissenyar i conceptuant-ho abans d'implementar-ho per tenir la millor probabilitat d'encertar-la a la primera. Sempre estic buscant per aprendre nous llenguatges de programació per millorar el raonament i abstracció de problemes, i per conèixer les característiques de les diferents tecnologies que donen una solució única al problema. Vaig estar tota la meva infància creant videojocs amb el motor Unit i C# i dissenyant el meu propi art amb píxel-art.",
    "txt-aboutMe-maintext-eng": " Always searching to get a simple and scalable solution. With experience in modular programming and object-oriented, always design and study it to see potential errors before implementing it to get the best chance of doing it right the first time.I like to always learn new programming languages to improve the skills that all have in common, problem-solving. And to know in each specific case which technology will be the most useful to implement. I spend my youth creating video games with C# in Unity and making my pixel art to use in my games.",
    "txt-Education-cat": "Educació",
    "txt-Education-eng": "Education",
    "txt-university-cat": " Universitat de Girona - Enginyeria Informàtica",
    "txt-university-eng": " University of Girona - Computer Engineering",
    "txt-Work-cat": "Experiències Laborals:",
    "txt-Work-eng": "Past Work Experience:",
    "txt-Title-Work-eng" : "SYSTEMS MANAGEMENT ASSISTANT",
    "txt-Title-Work-cat" : "ASSISTENT DE SISTEMES",
    "txt-Desc-Work-cat" : "Manteniment, organització i reparació de sistemes, creació d'instal·lacions automàtiques i edició de vídeo.",
    "txt-Desc-Work-eng" : "Organitzation and repairing of System Managments, automatic installation and video recordings.",
    "txt-Hover-cat":"Selecciona per mostrar més detalls:",
    "txt-Hover-eng": "Hover to show more details:"  

}

listElementsTranslation = ["txt-ComputerEngineer", "txt-ProgramingLanguages","txt-AboutMe", "txt-ContactMe", "txt-aboutMe-maintext", "txt-Education", "txt-university" , "txt-Work","txt-Title-Work","txt-Desc-Work","txt-Hover","txt-Contact-Form" ]


function changeLanguage(newLen){

    for(var i of listElementsTranslation){
        listElements = document.getElementsByClassName(i);
        console.log(listElements)
        for(var j = 0; j < listElements.length; j++){
            console.log("A")
            listElements[j].innerHTML = dirText[i +"-"+newLen];
        }
    }

}