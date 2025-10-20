// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


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



