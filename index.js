// Selectores
const parserArea = document.getElementById('parser-area');
const result = document.getElementById('result');
const fieldset = document.getElementById('parser-options');
const warning = document.getElementById('warning-container');

const options = document.getElementsByName('option');

const noOptions = document.getElementById("no-options");
const sinParsear = document.getElementById("sin-parsear-error");
const noParentesis = document.getElementById("no-parentesis-error");



function sinParsearFn() {
    result.innerHTML = parserArea.value;
    result.style.color='#000000';
    noOptions.classList.add('inactive');
};



function noParentesisFn() {
    str = parserArea.value.replace('(', ' ');
    str = str.replace(')', ' ');
    result.innerHTML = str;
    result.style.color='#000000';
    noOptions.classList.add('inactive');
};



function soloParentesisFn() {
    a = parserArea.value.indexOf('(');
    b = parserArea.value.indexOf(')');
    str = parserArea.value.substring(a, b + 1);
    result.innerHTML = str;
    result.style.color='#000000';
    noOptions.classList.add('inactive');
}



function ignorarParentesisFn() {
    a = parserArea.value.indexOf('(');
    b = parserArea.value.indexOf(')');
    str1 = parserArea.value.slice(0, a);
    str2 = parserArea.value.slice(b + 1);
    result.innerHTML = str1 + str2;
    result.style.color='#000000';
    noOptions.classList.add('inactive');
}



// Funcion de boton parsear
parserBtn = async () => {
    if (document.getElementById('sin-parsear').checked) {
        return await sinParsearFn();

    } else if (document.getElementById('no-parentesis').checked) {
        return await noParentesisFn();
        
    } else if (document.getElementById('solo-parentesis').checked) {
        return await soloParentesisFn();

    } else if (document.getElementById('ignorar-parentesis').checked) {
        return await ignorarParentesisFn();    
        

    } else {
        noOptions.classList.remove('inactive');
    }
}



// Funcion de boton limpiar
cleanBtn = async () => {
    return promise = await new Promise ((resolve) => {
        if (typeof parserArea.value == 'string') {
            resolve(
                parserArea.value = '',
                document.getElementById('result').innerHTML = '',
                result.style.color='#DCDCDC',
                sinParsear.classList.add('inactive'),
                noParentesis.classList.add('inactive')
            );
        }
    })
    .then(result);
}