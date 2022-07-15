// Задание 1.

// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
// С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
// затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.

let Input;

while (true) {
Input= prompt('Введите целое число. Чтобы выйти нажмите Esc.:');

if (Input === null) { document.write("Программа остановлена"); break;}

if (Input === null || isNaN(+Input) || Input =='' ||  Input.indexOf(' ') > -1) 
{console.log(`Упс, кажется, вы ошиблись! Некорректное число ${Input}`);}

else if(+Input % 2 === 0)
{console.log(`Число ${Input} четное.`); } 

else {console.log(`Число ${Input} нечетное.`);} 

}