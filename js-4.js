'use strict';

var readline = require('readline');

var result = {
    firstName:'',
    secondName:'',
    patronymic:'',
    age:0,
    gender:'',
    retiree:''
};

askSecondName();

function askSecondName() {
    var rl = prompt();
    rl.question('Введите Вашу фамилию:',function (answer) {
        rl.close();
        if(!answer || answer === " "){
            console.log('Вы ничего не ввели.Повторите ввод:');
            askSecondName();
        }
        else {
            result.secondName = answer;
            askName();
        }
    })
}

function askName() {
    var rl = prompt();
    rl.question('Введите Ваше имя:',function (answer){
        rl.close();
        if(!answer || answer === " "){
            console.log('Вы ничего не ввели.Повторите ввод:');
            askName();
        }
        else{
            result.firstName = answer;
            askPatronymic();
        }
    })
}
 function askPatronymic() {
     var rl = prompt();
     rl.question('Введите Ваше отчество:', function (answer) {
         rl.close();
         if(!answer || answer === " "){
             console.log('Вы ничего не ввели.Повторите ввод:');
             askPatronymic();
         }
         else{
             result.patronymic = answer;
             askAge();
         }
     })
 }
 function askAge() {
     var rl = prompt();
     rl.question("Введите Ваш возраст цифрами:", function (answer) {
         rl.close();
         var age = parseFloat(answer);
         if(age <= 0 || age >120 || isNaN(age)){
             console.log('Возраст введен некорректно. Повторите ввод:');
             askAge();
         }
         else{
             result.age = age;
             askGender();
         }
     })
 }
  function askGender(){
      var rl = prompt();
      rl.question("Ваш пол (м/ж)?", function (answer) {
          rl.close();
          var genderMale = "мужской".indexOf(answer.toLowerCase());
          var genderFemale = "женский".indexOf(answer.toLowerCase());
          if(genderMale >= 0){
              result.gender = "мужской";
              end();
          }
          else if(genderFemale >= 0){
              result.gender = "женский";
              end();
          }
          else {
              console.log('Вы ввели пол некорректно. Введите одну букву:');
              askGender();
          }
      })
  }

  function end() {
      console.log("Ваше ФИО:" + result.secondName + " " + result.firstName+ " " + result.patronymic + "; \n Ваш возраст:" +result.age + "; \n Ваш возраст в днях:" + (result.age *365) + "; \n Через 5 лет вам будет:" + (result.age +5) + "; \n Ваш пол:" + result.gender +"; \n Вы на пенсии:"+ (result.age>60?"да":"нет"));
  }

function prompt() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}


