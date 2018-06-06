var secondName = prompt("Введите Вашу фамилию:","Иванов");
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
var age = parseFloat(prompt("Ваш возраст (цифрами):","18"));
while ( age<= 0 || age > 120 || isNaN(age)){
    age = parseFloat(prompt("Вы ввели некорректный возраст. Введите Ваш возраст (цифрами):","18"));
}
var gender = confirm("Ваш пол мужской?")? "мужской" : "женский";
var retiree = (age > 60)? "да" : "нет";
var result = " Ваше фамилия, имя, отчество: " + secondName + " " + firstName + " " + patronymic + ";\n Ваш возраст в годах: " + age + ";\n Ваш возраст в днях: " + (age*365) + ";\n Через 5 лет вам будет: " + (age + 5) +  ";\n Ваш пол: " + gender + ";\n Вы на пенсии: " + retiree + "; ";
document.getElementById("text").textContent = result;




