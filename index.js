// Selectores
const parserArea = document.getElementById('parser-area');
const result = document.getElementById('result');
const fieldset = document.getElementById('parser-options');
const warning = document.getElementById('warning-container');

const options = document.getElementsByName('option');
let value = [];


// Gadget para el resultado
mirrorFn = (value) => {
    document.getElementById('result').innerHTML = value;
}



// Funcion de boton parsear
parserBtn = async () => {

    function sinParsear () {}
    function noParentesis () {}
    function soloParentesis () {}
    function ignorarParentesis () {}

    return new Promise ((resolve, reject) => {
        if (document.getElementById('sin-parsear').checked) {
            resolve();
        } else if (document.getElementById('no-parentesis').checked) {
            resolve();
        } else if (document.getElementById('solo-parentesis').checked) {
            resolve();
        } else if (document.getElementById('ignorar-parentesis').checked) {
            resolve();
        } else {
            reject();
        }
    })
}



// Funcion de boton limpiar
cleanBtn = async () => {
    return promise = new Promise ((resolve) => {
        if (typeof parserArea.value == 'string') {
            resolve(
                parserArea.value = '',
                document.getElementById('result').innerHTML = ''
            );
        }
    })
    .then(result);
}


// function anotherFn (frase) {
//     let start = '';
//     let finish = '';

//     for (i of frase) {
//         if (i == '(') {
//             console.log(frase.indexOf(i));
//             start = frase.indexOf(i);
//         } else if (i == ')') {
//             console.log(frase.indexOf(i));
//             finish = frase.indexOf(i);
//         } else {
//             console.log(frase[start,finish]);
//         }
//     }
//     // console.log(frase.search('(',')'));
// }

// anotherFn('papadio (ni cuanta prueba)');