let rs = require("randomstring");

console.log(rs.generate());

console.log(rs.generate(7));

console.log(rs.generate({
    length: 12,
    charset: 'alphabetic',
}));

console.log(rs.generate({
    charset: 'abc'
}));

