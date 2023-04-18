export const isEven = (num: number) => num % 2 === 0;

export const getOddEvenLabel = (num: number) => (isEven(num) ? 'even' : 'odd');
