// Selectores
const parserArea = document.getElementById("parser-area");
const result = document.getElementById("result");

const primaryButton = document.getElementById("primary-button");
const secondaryButton = document.getElementById("secondary-button");

const options = document.getElementsByName("option");



// Gadget para el resultado
mirror = (value) => {
    document.getElementById("result").innerHTML = value;
}



// Funcion de boton limpiar
clean = async () => {
    return new Promise ((resolve) => {
        if (typeof parserArea.value == 'string') {
            resolve(parserArea.value = '')
        }
    })    
}



// Funcion de boton parsear
parser = async () => {

    function sinParsear () {}
    function noParentesis () {}
    function soloParentesis () {}
    function ignorarParentesis () {}

    return new Promise ((resolve, reject) => {
        if (document.getElementById("sin-parsear").checked) {
            resolve();
        } else if (document.getElementById("no-parentesis").checked) {
            resolve();
        } else if (document.getElementById("solo-parentesis").checked) {
            resolve();
        } else if (document.getElementById("ignorar-parentesis").checked) {
            resolve();
        } else {
            reject();
        }
    })
}



// Funcion de boton deshacer
undo = async () => { 
    return new Promise ((resolve) => {
        for (option of options) {
            if (option.checked == true) {
                resolve (option.checked = false)
            }
        }
    })
}


