const promise = new Promise((resolve, reject) => {
    const isPromiseFullfilled = Math.random() > 0.5;
    console.log(isPromiseFullfilled);

    setTimeout(() => {
        if (isPromiseFullfilled) {
            resolve(
                "Проміс виконався успішно"
            );
        } else {
            reject("Проміс виконався з помилкою")
        }
    }, 1000);
});

promise
.then((value) => {
    console.log(`${value}`);
})
.catch((err) => {
    console.log(`${err}`);
})
.finally(() => {
    console.log("проміс завершений!");
} )