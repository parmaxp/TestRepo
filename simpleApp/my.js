let a = 10;
let text = "text";
let textLenght = text.length;
let textSpec = "abs \"Text\"";
let str1 = "ABDC EF G";
console.log(textSpec);
console.log(textLenght);
console.log(textSpec.indexOf("xt"));
console.log(text.substring(1,3));
console.log(str1.charAt(0));
console.log(str1.split(" "));
console.log(str1.split(" ")[0]);

let str2 = "One";
let str3 = "Two";
let res = str2.concat("", str2, " Three");
console.log(res);

let res2 = `Zero ${str2} ${str3} Three`;
console.log(res2);