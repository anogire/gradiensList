import {Counter} from './counter';

describe('Counter class', () => {
    let instance;

    beforeAll(() => {
        instance = new Counter();
    });

    afterEach(() => {
        instance.value = 0;
    });

   it('instance has value', () => {
       expect(instance).toHaveProperty('value');
   });

    it('instance has increment and decrement methods', () => {
        expect(instance).toHaveProperty('increment');
        expect(instance).toHaveProperty('decrement');
    });

    it('value equals 3 when increment calls 3 times', () => {
        instance.increment();
        instance.increment();
        instance.increment();
        expect(instance.value).toEqual(3);
    });

    it('value equals -3 when decrement calls 3 times', () => {
        instance.decrement();
        instance.decrement();
        instance.decrement();
        expect(instance.value).toEqual(-3);
    });
});