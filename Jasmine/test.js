function helloWord() {
    return 'Hello world!';
};

describe('Test Suite: Hello world', function () {
    let testWord = "";

    beforeEach(function () {
        testWord = helloWord();
    })

    //Spec for operation
    it('Test spec: says hello', function () {
        expect(testWord).toEqual('Hello world!');
        //expects(true).not.toBe(false);
        //expects(true).not.toBe(false);
        //expects(true).toEqual(true);
    });

    afterEach(function () {
        testWord = "";
    })
});

// xdescribe('Hello world', function () {
//     it('says hello', function () {
//         expect(helloWorld()).toEqual('Hello world!');
//     });
// });

// describe('Hello world', function () {
//     xit('says hello', function () {
//         expect(helloWorld()).toEqual('Hello world!');
//     });
//     xit('says hello', function () {
//         expect(helloWorld()).toEqual('Hello world!');
//     });
// });

//Run: jasmine jasmine/test.js