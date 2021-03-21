// 1a
const button1 = document.querySelector(`#one`);

// 1b
button1.onclick = () => alert(`Cool! You can hear/understand a hummingbird and ants`);

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseenter`, () => alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`),
{once: true});

// Bonus

// 3a
const form = document.querySelector(`form`);
console.dir(form);

// 3b
form.addEventListener(`submit`, f => {
    f.preventDefault();
    const value = form.elements.quote.value;
    alert(`${value}`);
});

// 4a
const darkMode = document.querySelector(`#dm`);
console.dir(darkMode);

// 4b
const elements = document.querySelectorAll('*');
console.dir(elements);

darkMode.addEventListener(`click`, () => {
    for (dark of elements) {
        dark.classList.toggle(`dark-mode`);
    };
});

// 5a
const reality =document.querySelector(`#reality`);
console.dir(reality);

// 5b
// let num = reality;
// reality.addEventListener(`click`, => {
// while (reality <= 2);
// });
