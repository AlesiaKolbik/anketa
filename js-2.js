"use strict";

const storageData = window.localStorage;
let secondName, firstName, patronymic, age, gender, retiree;

function askUser() {

    secondName = prompt("Введите Вашу фамилию:", "Иванов");

    while (secondName == false || secondName === null) {
        secondName = prompt("Вы ввели пустую строку. Введите Вашу фамилию еще раз:", "Иванов");
    }
    firstName = prompt("Введите Ваше имя:", "Иван");
    while (firstName == false || firstName === null) {
        firstName = prompt("Вы ввели пустую строку. Введите Ваше имя еще раз:", "Иван");
    }
    patronymic = prompt("Введите Ваше отчество:", "Иванович");
    while (patronymic == false || patronymic === null) {
        patronymic = prompt("Вы ввели пустую строку. Введите Ваше отчество еще раз:", "Иванович");
    }
    age = parseFloat(prompt("Ваш возраст (цифрами):", "18"));

    while (age <= 0 || age > 120 || isNaN(age)) {
        age = parseFloat(prompt("Вы ввели некорректный возраст. Введите Ваш возраст (цифрами):", "18"));
    }
    gender = confirm("Ваш пол мужской?") ? "мужской" : "женский";
    retiree = (age > 60) ? "да" : "нет";
     saveData('result', `Ваше фамилия, имя, отчество: ${secondName} ${firstName} ${patronymic};
     Ваш возраст в годах: ${age};
     Ваш возраст в днях: ${age *365};
     Через 5 лет вам будет: ${age + 5};
     Ваш пол: ${gender};
     Вы на пенсии: ${retiree};`)
}

function saveData(key, value) {
    storageData.setItem(key, value);
}
 if(!localStorage.getItem('result')){
    askUser();
 }

document.getElementById("text").innerHTML = localStorage.getItem('result');