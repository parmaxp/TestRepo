console.log(`1 step`);
console.log(`2 step`);

let p1 = new Promise((resolve, reject) => 
setTimeout(() => {
    console.log(`3 step`);
    resolve("ready");
}, 3000));

async function test(promise) {
    let s1 = await promise;
    console.log("4");
    console.log(s1);

    return "I'm function"
}

async function func(){
    let f1 = await test(p1);
    console.log("----------------------")
    console.log(f1);
}

func();

