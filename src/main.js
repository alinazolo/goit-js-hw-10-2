// const promise = new Promise((resolve, reject) => {
//     const isPromiseFullfilled = Math.random() > 0.5;
//     console.log(isPromiseFullfilled);

//     setTimeout(() => {
//         if (isPromiseFullfilled) {
//             resolve(
//                 "Проміс виконався успішно"
//             );
//         } else {
//             reject("Проміс виконався з помилкою")
//         }
//     }, 1000);
// });

// promise
// .then((value) => {
//     console.log(`${value}`);
// })
// .catch((err) => {
//     console.log(`${err}`);
// })
// .finally(() => {
//     console.log("проміс завершений!");
// } )



// const startBtn = document.querySelector(".start-btn");
// const container = document.querySelector(".containers");
// const result = document.querySelector(".result");

// startBtn.addEventListener("click", handleStartGame);

// function handleStartGame(event) {
//   event.target.disabled = true;

//   const promises = [...container.children].map(() => {
//     return new Promise((resolve, reject) => {
//       const isPromiseFulfilled = Math.random() > 0.5;

//       if (isPromiseFulfilled) {
//         resolve("🤩");
//       } else {
//         reject("😢");
//       }
//     });
//   });

//   result.textContent = "";

//   Promise.allSettled(promises).then((items) => {
//     console.log(items);

//     items.forEach((item, i) => {
//       container.children[i].textContent = "";
//       setTimeout(() => {
//         container.children[i].textContent = item.value || item.reason;
//       }, 1000 * (i + 1));
//     });

//     const isWinner =
//       items.every(({ status }) => status === "fulfilled") ||
//       items.every(({ status }) => status === "rejected");

//     setTimeout(() => {
//       event.target.disabled = false;
//       result.textContent = isWinner ? "Winner 🎉" : "Looser 😅";
//     }, container.children.length * 1000);
//   });
// }
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
