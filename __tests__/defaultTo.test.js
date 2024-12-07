import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
    test('returns the default value if input is NaN', () => {
        expect(defaultTo(NaN, 10)).toBe(10);
    });
    
    test('returns the default value if input is null', () => {
        expect(defaultTo(null, 2)).toBe(2);
    });

    test('returns the default value if input is undefined', () => {
        expect(defaultTo(undefined, 2)).toBe(2);
    });

    test('returns the input value if it is not Nan, null or undefined', () => {
        expect(defaultTo(1, 2)).toBe(1);
    });

    test('returns empty string if the input is an empty string', () => {
        expect(defaultTo('', 'b')).toBe('');
    });
});