"use strict";
let secondName = prompt("Введите Вашу фамилию:","Иванов");
while(secondName == false || secondName === null){
    secondName = prompt("Вы ввели пустую строку. Введите Вашу фамилию еще раз:","Иванов");
}
let firstName = prompt("Введите Ваше имя:","Иван");
while(firstName == false || firstName === null){
    firstName = prompt("Вы ввели пустую строку. Введите Ваше имя еще раз:","Иван");
}
let patronymic = prompt("Введите Ваше отчество:","Иванович");
while(patronymic == false || patronymic === null){
    patronymic = prompt("Вы ввели пустую строку. Введите Ваше отчество еще раз:","Иванович");
}
let age = parseFloat(prompt("Ваш возраст (цифрами):","18"));
while ( age<= 0 || age > 120 || isNaN(age)){
    age = parseFloat(prompt("Вы ввели некорректный возраст. Введите Ваш возраст (цифрами):","18"));
}
let gender = confirm("Ваш пол мужской?")? "мужской" : "женский";
let retiree = (age > 60)? "да" : "нет";

document.getElementById("text").textContent = `Ваше фамилия, имя, отчество: ${secondName} ${firstName} ${patronymic} ;
              Ваш возраст в годах: ${age};
              Ваш возраст в днях: ${age *365};
              Через 5 лет вам будет: ${age + 5};
              Ваш пол: ${gender};
              Вы на пенсии: ${retiree};`;