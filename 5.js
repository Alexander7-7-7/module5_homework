// -----------------------Задание 5.
// Дан произвольный массив. Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.

let newArray = [1, 5, 7, 'df', '1a'];

console.log(`Длина массива: ${newArray.length}`);

 newArray.forEach(function(item) {
    console.log(item);
            });

console.log(`Исходный массив данных: [${newArray}]`);