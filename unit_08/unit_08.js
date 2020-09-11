//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1() {
	let i_1 = 1;
	let out_1 = document.querySelector('.out-1');
	let str_1 = "";
	while (i_1 <= 50) {
		str_1 += `${i_1} `;
		i_1++;
	}
	out_1.innerHTML = str_1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

function t2() {
	let str_2 = "";
	let i_2 = 2;
	let out_2 = document.querySelector('.out-2');
	while (i_2 <= 122) {
		str_2 += `${i_2} `;
		i_2 += 2;
	}
	out_2.innerHTML = str_2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

function t3() {
	let str_3 = "";
	let out_3 = document.querySelector('.out-3');
	let i_3 = 25;
	while (i_3 >= 7) {
		str_3 += `${i_3} `;
		i_3--;
	}
	out_3.innerHTML = str_3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.


function t4() {
	let str_4 = "";
	let out_4 = document.querySelector('.out-4');
	let i_4 = 77;
	while (i_4 >= 35) {
		str_4 += `${i_4}_`;
		i_4 -= 3;
	}
	out_4.innerHTML = str_4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

function t5() {
	let str_5 = "";
	let out_5 = document.querySelector('.out-5');
	let i_5 = 1;
	while (i_5 <= 17) {
		if (i_5 % 2 == 1) {
			str_5 += `${i_5}_*`;
		}
		else {
			str_5 += `${i_5}_**`;
		}
		i_5++;
	}
	out_5.innerHTML = str_5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.

function t6() {
	let i_6 = parseInt(document.querySelector('.i-6').value);
	// console.log(typeof i_6);
	let out_6 = document.querySelector('.out-6');
	let str_6 = "";
	while (i_6 > 0) {
		let inc_61 = 0;
		while (inc_61 < 6) {
			str_6 += "*";
			inc_61++;
		}
		str_6 += "<br>";
		i_6--;
	}
	out_6.innerHTML = str_6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

function t7() {
	let i_7 = parseInt(document.querySelector('.i-7').value);
	let str_7 = "";
	let out_7 = document.querySelector('.out-7');
	while (i_7 >= 0) {
		str_7 += `${i_7} `;
		i_7--;
	}
	out_7.innerHTML = str_7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.

function t8() {
	let i_81 = parseInt(document.querySelector('.i-81').value);
	let i_82 = parseInt(document.querySelector('.i-82').value);
	let str_8 = "";
	let out_8 = document.querySelector('.out-8');
	while (i_81 <= i_82) {
		str_8 += `${i_81} `;
		i_81++;
	}
	out_8.innerHTML = str_8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

function t9() {
	let i_91 = parseInt(document.querySelector('.i-91').value);
	let i_92 = parseInt(document.querySelector('.i-92').value);
	let str_9 = "";
	let out_9 = document.querySelector('.out-9');
	if (i_91 < i_92) {
		while (i_91 <= i_92) {
			str_9 += `${i_91} `;
			i_91++;
		}
	}
	else {
		while (i_92 <= i_91) {
			str_9 += `${i_92} `;
			i_92++;
		}
	}
	out_9.innerHTML = str_9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
	let str_10 = "";
	let out_10 = document.querySelector('.out-10');
	let i_10 = 1950;
	while (i_10 <= 2000) {
		str_10 += `${i_10} `;
		i_10 += 2;
	}
	out_10.innerHTML = str_10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


function t11() {
	let out_11 = document.querySelector('.out-11');
	let div_11 = document.querySelectorAll('div.div-11');
	let i_11 = 0;
	let str_11 = "";
	while (i_11 < div_11.length) {
		str_11 += div_11[i_11].innerHTML + " ";
		i_11++;
	}
	out_11.innerHTML = str_11;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12() {
	let str_12 = "";
	let div_12 = document.querySelectorAll('div.div-12');
	let i_12 = 0;
	while (i_12 < div_12.length) {
		div_12[i_12].style.background = "orange";
		i_12++;
	}
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
	let i_13 = document.querySelectorAll('.i-13');
	let inc_13 = 0;
	while (inc_13 < i_13.length) {
		i_13[inc_13].value = inc_13 + 1;
		// console.log(i_13[inc_13].value);
		inc_13++;
	}
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
	let i_14 = document.querySelectorAll('.i-14');
	let out_14 = document.querySelector('.out-14');
	let inc_14 = 0;
	while (inc_14 < i_14.length) {
		if (i_14[inc_14].checked) {
			out_14.innerHTML = i_14[inc_14].value;
		}
		inc_14++;
	}
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

function t15() {
	let out_15 = document.querySelector('.out-15');
	let i_15 = 0;
	let str_15 = "";
	while (i_15 <= 10) {
		str_15 += `${10 - i_15} ${i_15} `;
		i_15++;
	}
	out_15.innerHTML = str_15;
}

document.querySelector('.b-15').onclick = t15;
