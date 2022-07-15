// -----------------------------------------------Задание 3.
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let newArray = [];

let Input= prompt('Введите слово Hello').split('');

for (let i = Input.length - 1; i >= 0; i--) {

newArray.push(Input[i]); 

}
let result = newArray.join('');
let initial = Input.join('');

        console.log(`Вы ввели: ${initial}`);
        console.log(`Получилось: ${result}`);