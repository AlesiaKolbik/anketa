var secondName = prompt("Введите Вашу фамилию:","Иванов");
while(secondName == false){
    secondName = prompt("Вы ввели пустую строку. Введите Вашу фамилию еще раз:","Иванов");
}
var firstName = prompt("Введите Ваше имя:","Иван");
while(firstName == false){
    firstName = prompt("Вы ввели пустую строку. Введите Ваше имя еще раз:","Иван");
}
var patronymic = prompt("Введите Ваше отчество:","Иванович");
while(patronymic == false){
    patronymic = prompt("Вы ввели пустую строку. Введите Ваше отчество еще раз:","Иванович");
}
var age = parseFloat(prompt("Ваш возраст (цифрами):","18"));
while ( age<= 0 || age > 120 || isNaN(age)){
    age = parseFloat(prompt("Вы ввели некоректный возраст. Введите Ваш возраст (цифрами):","18"));
}
var gender = confirm("Ваш пол мужской?")? "мужской" : "женский";
var retiree = (age > 60)? "да" : "нет";
var result = " Ваше фамилия, имя, отчество: " + secondName + " " + firstName + " " + patronymic + ";  Ваш возраст в годах: " + age + ";   Ваш возраст в днях: " + (age*365) + ";   Через 5 лет вам будет: " + (age + 5) +  ";   Ваш пол: " + gender + ";  Вы на пенсии: " + retiree + "; ";
document.getElementById("text").textContent = result;




