// Add the two numbers from the DOM
// function addition(first, second) {
//     return first + second;
// };
// function multiply(first, second) {
//     return first * second;
// }

// function subtract(first, second) {
//     return first - second;
// }

// Run some code when the page loads.
window.addEventListener('load', function () {
    let first = document.getElementById('firstVal');
    let second = document.getElementById('secondVal');
    let answer = document.getElementById('answer');

    let plusBtn = document.getElementById('plus');
    plusBtn.addEventListener('click', function () {
        let sum = parseInt(first.value) + parseInt(second.value);
        answer.textContent = 'Answer: ' + sum;
    });
    let subtractBtn = document.getElementById('sub');
    subtractBtn.addEventListener('click', function () {
        let sum = parseInt(first.value) - parseInt(second.value);
        answer.textContent = 'Answer: ' + sum;
    });
    let multBtn = document.getElementById('mult');
    multBtn.addEventListener('click', function () {
        let equal = parseInt(first.value) * parseInt(second.value);
        answer.textContent = 'Answer: ' + equal;
    });
    let divBtn = document.getElementById('div');
    divBtn.addEventListener('click', function () {
        let dividend = parseInt(first.value) / parseInt(second.value);
        answer.textContent = 'Answer: ' + dividend;
    });
    let clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', function () {
        answer.textContent = 'Answer: ', first.value = 0, second.value = 0;
    });
});