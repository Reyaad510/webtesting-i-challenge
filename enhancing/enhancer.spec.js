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

    describe('The fail function', () => {
        it('When enhancement is less than 15, durability decrease by 5 ', () => {
            let weapon = {enhancement: 13, durability : 10};
            let result = enhancer.fail(weapon).durability;
    
            expect(result).toBe(5);
        });
    
        it('If enhancement is more than 15, durability decrease by 10', () => {
            let weapon = {enhancement: 20, durability : 15};
            let result = enhancer.fail(weapon).durability;
    
            expect(result).toBe(5);
        });
    
        it('If item enhancement greater than 16, decrease by 1', () => {
            let weapon = {enhancement: 20, durability : 15};
            
            let result = enhancer.fail(weapon).enhancement;
    
            expect(result).toBe(19);
        });
    })
});