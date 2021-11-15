let someNumber;
let someNumberResult;

someNumber = prompt('Введите некоторое число', 123456789);
someNumberResult = someNumber.split('');
someNumberResult.splice(1, 0, "-");
someNumberResult.splice(8, 0, "-");
someNumberResult.splice(10, 0, "-");

alert(`Вы ввели: ${someNumberResult.join('')}`);