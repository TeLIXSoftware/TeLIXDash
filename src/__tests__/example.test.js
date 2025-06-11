
function double(n) {
    return n * 2;
}
  
  test('doubles a number', () => {
    expect(double(3)).toBe(6);
  });