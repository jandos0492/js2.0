// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;
console.log(a / b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;
document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;
document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').textContent = e1 + f1; // Произошла конкатенация строк;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = "Hello";
document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = "Hello";
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let i_8 = document.querySelector(".i-8");

function t8() {
	console.log(i_8.value);
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let i_9 = document.querySelector(".i-9");
let div_out_9 = document.querySelector(".out-9");

function t9() {
	let i_9Val = i_9.value;
	div_out_9.innerHTML = i_9Val;
	i_9.value = "";
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let i_10 = document.querySelector(".i-10");
let div_out_10 = document.querySelector(".out-10")

function t10() {
	let i_10Val = +i_10.value;
	div_out_10.innerHTML = i_10Val * 10;
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let i_11 = document.querySelector(".i-11");
let div_out_11 = document.querySelector(".out-11");

function t11() {
	let i_11Val = +i_11.value;
	div_out_11.innerHTML = i_11Val + 10;
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let i_12_1 = document.querySelector(".i-12_1");
let i_12_2 = document.querySelector(".i-12_2");
let div_out_12 = document.querySelector(".out-12");

function t12() {
	let i_12_1_val = i_12_1.value;
	let i_12_2_val = i_12_2.value;
	div_out_12.innerHTML = "Hello " + i_12_1_val + " " + i_12_2_val;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let i_13_1 = document.querySelector(".i-13_1");
let i_13_2 = document.querySelector(".i-13_2");
div_out_13 = document.querySelector(".out-13");

function t13() {
	let i_13_1_val = +i_13_1.value;
	let i_13_2_val = +i_13_2.value;
	div_out_13.innerHTML = i_13_1_val + i_13_2_val;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector('.i-14').value = "Hello";

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector(".i-15");
y.style.border = '2px solid red';

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let i_16_1 = document.querySelector(".i-16-1");
let i_16_2 = document.querySelector(".i-16-2");
let div_out_16 = document.querySelector(".out-16");

function t16() {
	let i_16_1_val = +i_16_1.value;
	let i_16_2_val = +i_16_2.value;
	div_out_16.innerHTML = i_16_1_val + i_16_2_val;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let i_17 = document.querySelector(".i-17");
let div_out_17 = document.querySelector(".out-17");

function t17() {
	let t = i_17.value;
	t = parseInt(t);
	div_out_17.innerHTML = t;
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let i_18 = document.querySelector(".i-18");
let div_out_18 = document.querySelector(".out-18");

function t18() {
	let t_2 = i_18.value;
	t_2 = parseFloat(t_2);
	div_out_18.innerHTML = t_2;
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let i_19_1 = document.querySelector(".i-19-1");
let i_19_2 = document.querySelector(".i-19-2");
let div_out_19 = document.querySelector(".out-19");

function t19() {
	let i_19_1_val = +i_19_1.value;
	let i_19_2_val = +i_19_2.value;
	div_out_19.innerHTML = i_19_1_val + i_19_2_val;
	// let t_3 = i_19_1.value;
	// let t_4 = i_19_2.value;
	// t_3 = parseInt(t_3);
	// t_4 = parseInt(t_4);
	// div_out_19.innerHTML = t_3 + t_4;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let i_20_1 = document.querySelector(".i-20-1");
let i_20_2 = document.querySelector(".i-20-2");
let i_20_3 = document.querySelector(".i-20-3");
let i_20_4 = document.querySelector(".i-20-4");
let div_out_20 = document.querySelector(".out-20");

function t20() {
	let i_20_1_val = i_20_1.value;
	let i_20_2_val = i_20_2.value;
	let i_20_3_val = +i_20_3.value;
	let i_20_4_val = i_20_4.value;
	div_out_20.innerHTML = 'Уважаемый ' + i_20_1_val + ", " + i_20_2_val + ", " + "ваш возраст " + i_20_3_val + " года (лет)" + ", " + "по профессии вы " + i_20_4_val + ".";
}

document.querySelector('.b-20').onclick = t20;

function sortAlphabet(abc) {
	return [...abc].sort((a, b) => a.localeCompare(b) + a.localeCompare(a));
}

function s(string) {
	let str = string;
	let new_str = "";
	let arr = [];
	let str_i = 0;
	let str_j = str_i;
	while (str_i < str.length) {
		if (str.charAt(str_i) <= str.charAt(str_i + 1)) {
			str_j++;
			new_str = str.substr(str_i, str_j + 1);
		}
		arr.push(new_str);
		str_i++;
	}
	let final_arr = [];
	for (let arr_i = 0; arr_i < arr.length; arr_i++) {
		arr[arr_i] = sortAlphabet(arr[arr_i]);
		arr[arr_i] = arr[arr_i].join().replace(/,/g, "");
		if (str.includes(arr[arr_i])) {
			final_arr.push(arr[arr_i])
		}
	}
	final_arr.sort((a, b) => b.length - a.length);
	return final_arr[0];
	console.log(final_arr)
}

console.log(s("azcbobobegghakl"));