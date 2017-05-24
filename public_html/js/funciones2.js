window.onload = function() {

    /* Events fired on the drag target */
document.ondragstart = function(event) {
    event.dataTransfer.setData("Text", event.target.id);
};

document.ondrag = function(event) {
    document.getElementById("demo").innerHTML = "Elemento P arrastrado";
};

/* Events fired on the drop target */
document.ondragover = function(event) {
    //Previene el comportamiento por defecto
    event.preventDefault();
};

document.ondrop = function(event) {
    event.preventDefault();
    if ( event.target.className === "droptarget" ) {
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("demo").innerHTML = "The p element was dropped";
    }
};

};


