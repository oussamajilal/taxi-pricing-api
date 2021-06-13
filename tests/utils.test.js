const utils = require('../utils');

describe('calculatePrice', () => {
    it('should return 6 as calculated during regular hours', () => {
        expect(utils.calculatePrice(2, '2020-06-19T13:01:17.031Z')).toEqual(6);
    });
    
    it('should return 11 as calculated during early night hours', () => {
        expect(utils.calculatePrice(2, '2020-06-19T21:01:17.031Z')).toEqual(11);
    });
    
    it('should return 11 as calculated during late night hours', () => {
        expect(utils.calculatePrice(2, '2020-06-19T04:01:17.031Z')).toEqual(11);
    });
    
    it('should return 16 as calculated during busy hours', () => {
        expect(utils.calculatePrice(2, '2020-06-19T18:01:17.031Z')).toEqual(16);
    });
});