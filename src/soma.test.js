function soma(a, b) {
  return a + b;
}

test('1 + 1 = 2', () => {
  expect(soma(1, 1)).toBe(2);
});

test('2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('0 + 0 = 0', () => {
  expect(soma(0, 0)).toBe(0);
});

test('números negativos', () => {
  expect(soma(-2, -3)).toBe(-5);
});

test('positivo e negativo', () => {
  expect(soma(5, -2)).toBe(3);
});
