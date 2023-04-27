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
    "txt-ComputerEngineer-cat" : "Enginyer Informatic",
    "txt-ComputerEngineer-eng" : "Computer Engineer ",
    "txt-ProgramingLanguages-cat" : "Llenguatges de Programació",
    "txt-ProgramingLanguages-eng" : "Programing Languages",
    "txt-AboutMe-cat" : "Qui soc",
    "txt-AboutMe-eng" : "About Me",
    "txt-ContactMe-cat": "On trobar-me",
    "txt-ContactMe-eng": "Contact Me",
    "txt-ContactMe-eng": "Contact Me",
    "txt-Contact-Form-cat": "Posem-nos en contacte",
    "txt-Contact-Form-eng": "Contact",
    "txt-aboutMe-maintext-cat": "Sempre buscant com trobar una solució simple i escalable. Amb experiencia amb programació modular i orientada amb objectes, sempre disenyar i conceptuant-ho abans de implementar-ho per tenir la millor probabilitat de encertar-la a la primera. Sempre estic buscant per apendre nous llenguatges de programacio per millorar el reonament i abstracció de problemes, i per coneixer les caracteristiques de les diferents tecnologies que donen una solució unica al problema. Vaig estar tota la meva infancia creant videojocs amb el motor Unit i C# i disenyant el meu propi art amb pixel-art.",
    "txt-aboutMe-maintext-eng": " Always searching to get a simple and scalable solution. With experience in modular programming and object-oriented, always design and study it to see potential errors before implementing it to get the best chance of doing it right the first time.I like to always learn new programming languages to improve the skills that all have in common, problem-solving. And to know in each specific case which technology will be the most useful to implement. I spend my youth creating video games with C# in Unity and making my pixel art to use in my games.",
    "txt-Education-cat": "Educació",
    "txt-Education-eng": "Education",
    "txt-university-cat": " Universitat de Girona - Enginyeria Informatica",
    "txt-university-eng": " University of Girona - Computer Engineering",
    "txt-Work-cat": "Experiencies Laborals:",
    "txt-Work-eng": "Past Work Experience:",
    "txt-Title-Work-eng" : "SYSTEMS MANAGEMENT ASSISTANT",
    "txt-Title-Work-cat" : "ASISTENT DE SISTEMES",
    "txt-Desc-Work-cat" : "Manteiment, organitzacio i reparació  de sistemes, creació d'instalacions automatiques i ediciò de video.",
    "txt-Desc-Work-eng" : "Organitzation and repairing of System Managments, automatic installation and video recordings.",
    "txt-Hover-cat":"Seleciona per mostrar més detalls:",
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