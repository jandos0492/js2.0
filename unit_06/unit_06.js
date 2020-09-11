//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
	let str_1 = "";
	let out_1 = document.querySelector('.out-1');
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 3; k++) {
			str_1 += "*";
		}
		str_1 += "_";
	}
	out_1.innerHTML = str_1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
	let out_2 = document.querySelector('.out-2');
	let str_2 = "";
	for (let i = 1; i < 4; i++) {
		str_2 += i + "<br>";
		for (let k = 0; k < 3; k++) {
			str_2 += `*_`;
		}
		str_2 += "<br>";
	}
	out_2.innerHTML = str_2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
	let out_3 = document.querySelector('.out-3');
	let str_3 = "";
	for (let i = 0; i < 4; i++) {
		for (let k = 0; k < 3; k++) {
			str_3 += "*_";
		}
		str_3 += "<br>";
	}
	out_3.innerHTML = str_3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
	let str_4 = "";
	let out_4 = document.querySelector('.out-4');
	for (let i = 1; i < 4; i++) {
		str_4 += `${i}_`;
		for (let k = 1; k < 6; k++) {
			str_4 += `${k} `;
		}
	}
	out_4.innerHTML = str_4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
	let str_5 = "";
	let out_5 = document.querySelector('.out-5');
	for (let i = 0; i < 3; i++) {
		for (let k = 0; k < 6; k++) {
			if (k % 2 != 0) {
				str_5 += "0";
			}
			else {
				str_5 += "1";
			}
		}
		str_5 += "<br>";
	}
	out_5.innerHTML = str_5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
	let str_6 = "";
	let out_6 = document.querySelector('.out-6');
	for (let i = 0; i < 3; i++) {
		for (let k = 1; k < 7; k++) {
			if (k % 2 == 0 && k != 6) {
				str_6 += "0";
			}
			else if (k % 3 == 0) {
				str_6 += "x";
			}
			else {
				str_6 += "1";
			}
		}
		str_6 += "<br>";
	}
	out_6.innerHTML = str_6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
	let str_7 = "";
	let out_7 = document.querySelector('.out-7');
	for (let i = 1; i < 5; i++) {
		for (let k = 0; k < i; k++) {
			str_7 += "*";
		}
		str_7 += "<br>";
	}
	out_7.innerHTML = str_7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
	let str_8 = "";
	let out_8 = document.querySelector('.out-8');
	for (let i = 5; i > 0; i--) {
		for (let k = 0; k < i; k++) {
			str_8 += "*";
		}
		str_8 += "<br>";
	}
	out_8.innerHTML = str_8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
	let str_9 = ''
	let out_9 = document.querySelector('.out-9')
	let one = 1
	let temp_str = ''
	for (let i = 0; i < 5; i++) {
		for (var k = 6; k >= 1; k--) {
			if (k == one) {
				temp_str += one + ' '
			}
		}
		str_9 += temp_str + '<br />'
		one += 1;
		}
	out_9.innerHTML = str_9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
	let str_10 = "";
	let out_10 = document.querySelector('.out-10');
	for (let i = 0; i < 5; i++) {
		for (let k = 1; k < 11; k++) {
			if (k < 10 && i == 0) {
				str_10 += "0" + k + " ";
			}
			else {
				str_10 += (i * 10) + k + " ";
			}
		}
		str_10 += "<br>";
	}
	out_10.innerHTML = str_10;
}

document.querySelector('.b-10').onclick = t10;