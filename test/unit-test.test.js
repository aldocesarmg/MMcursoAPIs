const assert = require('chai').assert;

function addValue(a, b) {
    return a+b;
}

describe('Suite de prueba para el curso', () => {
    it('should return 4', () => {
        let myVar = addValue(2, 2);
        assert.equal(myVar, 4);
    });
});