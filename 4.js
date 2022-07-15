// -------------------------Задание 4.
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

while (true) {

let ranDom =  Math.round(Math.random() *100);

console.log(ranDom);

if ( ranDom === 0 ) { document.write("Программа остановлена"); break;} 

}