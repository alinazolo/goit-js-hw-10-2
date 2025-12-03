// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import "./bitcoin.js";
import "./hero.js";

const btn = document.querySelector('button[type="submit"]');
const delay = document.querySelector('input[name="delay"]');
const fulfilled = document.querySelector('#fulfilled');
const rejected = document.querySelector('#rejected');


const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

const delay = parseInt(event.target.delay.value);
const state = event.target.state.value;

newPromise(delay, state)
    .then(delay => {
        iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`,
        });
    })
    .catch(delay => {
        iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
        });
    });

event.target.reset();
});
function newPromise(delay, state) {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    if (state === 'fulfilled') {
        resolve(delay);
    } else {
        reject(delay);
    }
}, delay);
    });
}

function fetchPosts(query) {
    const BASE_URL = "https://newsapi.org/v2/";
    const END_POINT = '/everything';
    const params = new URLSearchParams({
apiKey: "b9dcffcbacb84f259adc726859a50fc5",
q: query,

    })
    const url = `${BASE_URL}${END_POINT}?${params}`;
    return fetch(url).then(res => res.json());
}

fetchPosts("Tesla");


// const newForm = document.querySelector('.newform');


// newForm.addEventListener('submit', handleResult)

// function handleResult(event) {
//     event.preventDefault();
// const time = parseInt(event.target.time.value);
// const result = event.target.result.value;

// newPromise(time, result)
// .then(time => {
//     alert(`✅ Fulfilled promise in ${time} ms`);
// } )
// .catch(time =>{
//      alert(`❌ Rejected promise in ${time} ms`);
// })
// event.target.reset();

// }

// function newPromise(time, result) {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (result === "success") {
//             resolve(time)
//         } else {
//             reject(time);
//         }
//     }, time);
// });
// }


