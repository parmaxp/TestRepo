setTimeout(function () {
    console.log("3 seconds have passed")
}, 3000)

let time = 0;
let timer = setInterval(function () {
    time += 2;
    console.log(time + ` seconds have passed`);
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);