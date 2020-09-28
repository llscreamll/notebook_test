let but = document.querySelector("#but");
let inp = document.querySelector("#inp");
let arrText = [];
let newText = document.querySelector("#section1");
let text = document.createElement("div");
let notes = document.querySelector("#notes");


let tables = ["Здравствуйте", "Напиши,а я запомню =p", "Приветик!", "Есть,что записать? =)", "К вашим услугам ;)", "Ola amigo!"];
let tablesMath = Math.floor(Math.random() * tables.length);

notes.innerText = tables[tablesMath];


// Добавление заметки
but.onclick = addText;
window.onkeydown = function (e) {
    if (e.key == "Enter") {
        addText();
    }
}

function addText() {
    newText = document.querySelector("#section1");
    text = document.createElement("div");
    newText.appendChild(text);
    if (inp.value == "") {
        notes.innerText = "Введите текст:";

    } else {
        text.innerHTML = `<div class="newText">${inp.value}<button class="delets">Удалить</button></div></div>`;
        notes.innerText = "Заметки:";
        arrText.push(inp.value);

        localStorage.setItem("Text", JSON.stringify(arrText));
        inp.value = "";

        let textDel = document.querySelectorAll(".delets");
        for (let k = 0; k < textDel.length; k++) {
            textDel[k].addEventListener("click", delTexts);
        }

    }
};
// В локальное хранилище

let textGet = localStorage.getItem("Text");
textGet = JSON.parse(textGet);

// Из локального хранилища
for (let i = 0; i < textGet.length; i++) {
    arrText.push(textGet[i]);
    newText = document.querySelector("#section1");
    text = document.createElement("div");
    newText.appendChild(text);
    text.innerHTML = `<div class="newText">${textGet[i]}<button class="delets">Удалить</button></div></div>`;
}

// кнопка удаления

let textDel = document.querySelectorAll(".delets");
for (let k = 0; k < textDel.length; k++) {
    textDel[k].addEventListener("click", delTexts);
}

function delTexts() {
    arrText = arrText.filter((a) => a != this.parentNode.textContent.replace("Удалить", ""));
    localStorage.setItem("Text", JSON.stringify(arrText));
    this.parentNode.parentNode.innerHTML = "";
}