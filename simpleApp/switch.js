let examResult = 5;
let markLiteral;

switch (examResult) {
    case 4:
        markLiteral = "Good";
        break;
    case 5:
        markLiteral = "Excellent";
        break;
    default:
        markLiteral = "You can do it better";
}

console.log(`${examResult} = ${markLiteral}`)