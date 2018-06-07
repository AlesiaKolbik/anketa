'use strict';



const result = {
    firstName:'',
    secondName:'',
    patronymic:'',
    age:0,
    gender:'',
    retiree:''
};
askSecondName();
function askSecondName() {
    const rl = prompt();
    rl.question('Введите Вашу фамилию:', (answer) =>{
        rl.close();
        if(!answer || answer === " "){
            console.log('Вы ничего не ввели.Повторите ввод:');
            askSecondName();
        }
        else {
            result.secondName = answer;
            askName();
        }
    });
}
function askName() {
    const rl = prompt();
    rl.question('Введите Ваше имя: ', (answer) => {
        rl.close();
        if (!answer || answer === " ") {
            console.log('Имя не может быть пустым.');
            askName();
        }
        else {
            result.firstName = answer;
            askPatronymic();
        }
    });
}

function askPatronymic() {
    const rl = prompt();
    rl.question('Введите Ваше отчество:', (answer) =>{
        rl.close();
        if(!answer || answer === " "){
            console.log('Вы ничего не ввели. Повторите ввод:');
            askPatronymic();
        }
        else {
            result.patronymic = answer;
            askAge();
        }
    });

}
function askAge() {
    const rl = prompt();
    rl.question('Введите Ваш возраст цифрами: ', (answer) => {
        rl.close();
        const age = parseFloat(answer);
        if (age<= 0 || age > 120 || isNaN(age)) {
            console.log('Возраст введен некорректно. Повторите ввод:');
            askAge();
        }
        else {
            result.age = age;
            askGender();
        }
    });
}
function askGender() {
    const rl = prompt();
    rl.question('Ваш пол (м/ж)?', (answer) =>{
        rl.close();
        if(answer === 'м' || answer === 'муж' || answer === 'мужской'){
            result.gender = 'мужской';
            end();
        }
        else if(answer === 'ж' || answer === 'жен' || answer === 'женский'){
            result.gender = 'женский';
            end();
        }
        else {
          console.log('Вы ввели пол некорректно. Введите м или ж:');
          askGender();
        }
    });
}

function prompt() {
    const readline = require('readline');
    return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

function end() {
    console.log(`Ваше ФИО:${result.secondName} ${result.firstName} ${result.patronymic};
     Ваш возраст: ${result.age};
     Ваш возраст в днях:${result.age *365};
     Через 5 лет вам будет:${result.age +5};
     Ваш пол: ${result.gender};
     Вы на пенсии: ${result.age>60?"да":"нет"}`);
}
