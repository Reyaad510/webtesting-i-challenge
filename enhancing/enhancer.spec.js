const enhancer = require('./enhancer.js');

describe('the enhancer', () => {

    describe('the repair function', () => {
        it('should restore the durability to 100', () => {

            // arrange
            const weapon = {};
            // act
            const result = enhancer.repair(weapon); 
            // assert
            expect(result.durability).toBe(100);
        })
    })
})