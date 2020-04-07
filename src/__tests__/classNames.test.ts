import classNames from '../classNames';

describe('classNames tests', () => {
  test('should return the correct class', () => {
    const classAsProp = 'going';
    expect(classNames('hello', { world: true }, ['how', undefined, 'is', 'it', classAsProp])).toBe(
      'hello world how is it going',
    );
  });
});
