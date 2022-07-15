// Задание 8. Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.



let mAp = new Map ([ 
                    [1, "number"],
                    [true, "Boolean"],
                    ["car", "Mercedes"]
  ]);

  for (let vaLue of mAp.entries()) 
  {     
    console.log(`Ключ - ${vaLue[0]}, значение - ${vaLue[1]}`);
  }