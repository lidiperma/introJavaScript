function cambiarDiv() {

    document.getElementById("dos").innerHTML = "Hola Zgzz";
    alert(message);
    document.getElementById("uno").innerHTML = "Hola Mundo";
    alert(message);

}

function cambiarH1() {

    _prueba = document.getElementById("visualStudio").innerHTML = "Visual Studio";
    alert(typeof(_prueba));

}


function myFunction1() {
    alert("Hiciste click btn dcho en el  div!");
}

//trabajando con confirm()
function confirmar() {

    //Ingresamos un mensaje a mostrar
    var mensaje = confirm("¿Estas seguro de compartir?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
        alert("¡Gracias por aceptar!");
    }
    //Detectamos si el usuario denegó el mensaje
    else {
        alert("¡Has denegado el mensaje!");
    }
}
//separacion de la logica de negocio y la vista


//ok separacion vista logica de negocio

function myFunction() {
    document.getElementById("demo").innerHTML = "I was double-clicked!";

}

function myFunction2() {
    document.getElementById("otro").innerHTML = "La guerra de las Galaxias";

};

function dobleclick() {
    document.getElementById("laprueba").innerHTML = "HA FUNCIONADO";
};

function numeroAleatorio() {

    document.getElementById("remove").innerHTML = Math.random();

};

function addHandler() {

    document.getElementById("myDIV").addEventListener("mousemove", numeroAleatorio);

};

function removeHandler() {

    document.getElementById("myDIV").removeEventListener("mousemove", numeroAleatorio);
};

function borrar() {

    document.getElementById("myBtn").onclick = removeHandler;
};


window.onload = function() {



    document.getElementById("btn1").onclick = capturaEvento;

    /*var x = document.getElementById("demo");
     var y = document.getElementById("otro");
     var z = document.getElementById("eventlistener");
     
     
     if (x === null && y === null) {
     document.getElementById("eventlistener").addEventListener("click", dobleclick);
     } else {
     
     document.getElementById("demo").onmouseover = myFunction;
     document.getElementById("otro").onmouseover = myFunction2;
     }*/

};

function capturaEvento(evento) {

    alert("El evento es--" + evento.type);
    alert("El elemento disparador es...:" + evento.target);
    alert("Coordenas Ventana del Navegador...:" + evento.clientX + "..." + evento.clientY);
    alert("Coordenadas de la pantalla....:" + evento.screenX + "..." + evento.screenY);
    alert("Coordenadas de la pagina....:" + evento.pageX + "..." + evento.pageY);

    x = document.getElementById("dispara");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.color = "blue";

    } else {

        x.style.color = "red";
        setTimeout(function() { x.style.visibility = "hidden"; }, 2000);
    }
}

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
};

function normalImg(x) {
    x.style.height = "20px";
    x.style.width = "20px";
};

function blue(x) {
    x.style.color = "red";
};

function blue2(x) {
    x.style.visibility = "hidden";
};

window.onload = function() {

    document.getElementById("demo").onkeydown = keydownFunction;
    document.getElementById("demo").onkeypress = keypressFunction;
    document.getElementById("demo").onkeyup = keyupFunction;

};

function keydownFunction() {
    document.getElementById("demo").style.backgroundColor = "red";
}

function keyupFunction() {
    document.getElementById("demo").style.backgroundColor = "yellow";
}

function keypressFunction() {
    document.getElementById("demo").style.backgroundColor = "green";
}

window.onbeforeunload = function(event) {
    event.returnValue = "¿De verdad te vas?";
};


function codigoNavegador() {
    var x = "Browser CodeName: " + navigator.appCodeName;
    var y = "Browser Name: " + navigator.appName;
    var z = "Browser Version: " + navigator.appVersion;
    var p = "Browser producto: " + navigator.product;
    document.getElementById("codigoNavegador").innerHTML = x;
    document.getElementById("nombreNavegador").innerHTML = y;
    document.getElementById("versionNavegador").innerHTML = z;
    document.getElementById("productoNavegador").innerHTML = p;
}

window.onload = function() {

    document.getElementById("infoBoton").onclick = codigoNavegador;

};

function myScroll() {
    document.getElementById("demo").innerHTML = "Has hecho scroll";
}

window.onload = function() {
    document.getElementById("myDIV").onscroll = myScroll;
};


window.onload = function() {
    
    function myResetFunction(){
        
        document.getElementById("reseteo").onclick = resetear;
        function resetear (){
            var x = document.getElementById("myForm").onreset = confirmar;
            x.onreset = confirmar();
        }
    }
    
    
    
    function confirmar() {
    alert("El formulario de va a resetar");
}
};