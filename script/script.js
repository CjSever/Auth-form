'use strict'
let 
    password = document.getElementById('Password'),
    conditionBox = document.getElementById('pass__choose_visible'),
    wrapDataBox = document.getElementById('wrapDataBox'),
    paragraph = document.createElement('p');


function visiblePassword() {
    if (conditionBox.checked == true) {
        password.type = "text";
    } else {
        password.type = "password";
    }

}

function getParamsOnLoad() {
    let url = new URL(document.URL);

    for(let [name, value] of url.searchParams) {
        wrapDataBox.append(paragraph);
        paragraph.className = "frame__text";
        paragraph.id = `${name}`;
        paragraph.outerText = `${name} = ${value} `;
        console.log(`${name} = ${value}`);
      }

    
}