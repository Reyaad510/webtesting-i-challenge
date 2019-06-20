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

    describe('the succeed function', () => {
    
        it('if enhancement level is below 20 then will increment up by 1', () => {

            let weapon = { enhancement : 1 };
            let result = enhancer.succeed(weapon).enhancement;
            expect(result).toBe(2);
        });
    
        it('if enhancement level is 20 it will not increase anymore', () => {
            let weapon = { enhancement: 20};

            let result = enhancer.succeed(weapon).enhancement;
    
            expect(result).toBe(20);
        })
    })
});