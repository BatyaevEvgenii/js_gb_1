// test
/* 1. Задать температуру в градусах по Цельсию. 
Вывести в ​alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчет идет по формуле ​Tf = (9 / 5) * Tc + 32,​
где ​Tf — температура по Фаренгейту, ​Tc​— по Цельсию.*/
var tempCelsius = prompt('Введите температуру в градусах, °C:')
var tempFahrenheit = 9 / 5 * tempCelsius + 32
alert('Температура по Фаренгейту составила: ' + tempFahrenheit + ' °F')


/* 2. Объявить две переменные: ​admin и ​name.​ Записать в ​name строку "Василий"; Скопировать
значение из ​name​в ​admin.​Вывести ​admin​(должно вывестись «Василий»).*/
var name = 'Vasiliy'
var admin;
admin = name;
alert('В переменной, admin: '+ admin)
