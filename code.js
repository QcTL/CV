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