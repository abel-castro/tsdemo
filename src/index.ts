export function sumNumbers(numbers: string): number {
  // Return the sum of all passed positive integers smaller or equal than 1000
  const integers: number[] = numbers.split(',').map((x) => parseInt(x));
  const negatives: number[] = integers.filter((x) => x < 0);

  if (negatives.length > 0)
    throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));

  return integers
    .filter((x) => x <= 1000)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const result = sumNumbers('1, 2, 4, 5');
console.log(result);
