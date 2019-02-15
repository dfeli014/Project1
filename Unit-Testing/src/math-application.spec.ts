const mockCalculator = {
    add: jest.fn(),
    multiply: jest.fn()
};

jest.mock('./calculator', () => {
    return mockCalculator;
});

import { doMath } from "./math-application";


//sets up a test suite, which is a set of tests to be run
describe('math application', () => {
    
    // can create an "it" for each test case
    it('doMath should do math', () => {
        mockCalculator.multiply.mockReturnValue(2);
        mockCalculator.add.mockReturnValue(5);
        expect(doMath(1,2,3)).toEqual(5);
    })

    it('doMath should = 26 for 4, 5, 6', () => {
        const {add, multiply} = mockCalculator;
        multiply.mockReturnValue(20);
        add.mockReturnValue(26);

        expect(doMath(4,5,6)).toEqual(26);
        expect(multiply).toHaveBeenCalledWith(4, 5);
        expect(add).toHaveBeenCalledWith(20, 6);
    })
})