function callFunction(fun){
 fun();
}

let tata = function(){
    console.log('bye');
}

callFunction(tata);