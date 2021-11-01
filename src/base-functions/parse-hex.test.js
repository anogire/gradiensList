import {parseHEX} from './parse-hex';

xdescribe('parseHEX function', () => {
    it('parseHEX must be a function', () => {
        const type = typeof parseHEX;
        expect(type).toBe('function');
    });

    it('should return array', () => {
        const result = parseHEX('#000000');
        const isArray = Array.isArray(result);
        expect(isArray).toBeTruthy();
    });

    it('should return red color', () => {
        const result = parseHEX('#ff0000');
        expect(result).toEqual([255, 0, 0]);
    });

    it('should return null when the color is wrong', () => {
        const result = parseHEX('#');
        expect(result).toBeNull();
    })
})