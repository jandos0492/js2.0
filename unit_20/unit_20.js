
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
    document.querySelector('.out-1').textContent = event.key;
}

document.querySelector('.i-1').onkeyup = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2() {
    document.querySelector('.out-2').textContent = event.code;
}

document.querySelector('.i-2').onkeyup = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3() {
    if (event.code.startsWith("Key")) {
        document.querySelector('.out-3').textContent = true;
    }
    else if (event.code.startsWith("Digit")) {
        document.querySelector('.out-3').textContent = false;
    }
}

document.querySelector('.i-3').onkeyup = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
    let i_4 = document.querySelector('.i-4').value;
    document.querySelector('.out-4').textContent = i_4.toLowerCase();
}

document.querySelector('.i-4').onkeyup = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    let i_5 = document.querySelector('.i-5').value;
    document.querySelector('.out-5').textContent = i_5.toUpperCase();
}

document.querySelector('.i-5').onkeyup = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(elem, event) {
     if (event.keyCode >= 65 && event.keyCode <= 90) {
          elem.value += event.key.toLowerCase();
     }
}
document.querySelector(".i-6").onkeydown = function (event) {
     t6(this, event);
     return false;
};


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ["a", "b", "C", "D", "e", "F"];
    let rand = Math.floor(Math.random() * Math.floor(a7.length));
    document.querySelector('.out-7').textContent = a7[rand];

}

document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
    if (event.key == "o") {
        document.querySelector('.out-8').textContent += 0;
    }
    else if (event.key == "l") {
        document.querySelector('.out-8').textContent += 7;
    }
    else if (event.key == "i") {
        document.querySelector('.out-8').textContent += 1;
    }
    else {
        document.querySelector('.out-8').textContent += event.key;
    }
}

document.querySelector('.i-8').onkeydown = function (event) {
    t8(event);
}


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let counter = 0;

function t9(event) {
    if (event.key == "ArrowDown") {
        counter++;
    }
    document.querySelector('.out-9').textContent = counter;
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10(event) {
    let img = document.querySelector('img');
    let img_width = img.offsetWidth;
    let img_height = img.offsetHeight;
    if (event.key == "ArrowRight" || event.key == "ArrowLeft") {
        img_width++;
        img.style.width = img_width + "px";
    }
    else if (event.key == "ArrowDown" || event.key == "ArrowUp") {
        img_height++;
        img.style.height = img_height + "px";
    }
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11() {

}

// ваше событие здесь!!!

