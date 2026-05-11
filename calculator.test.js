// calculator.js 기본 테스트

const { add, subtract, multiply, divide, power } = require('./calculator');

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✅ ${description}`);
    passed++;
  } catch (e) {
    console.log(`  ❌ ${description}: ${e.message}`);
    failed++;
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`기대값: ${expected}, 실제값: ${actual}`);
      }
    }
  };
}

console.log('\n[덧셈 테스트]');
test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
test('0 + 0 = 0', () => expect(add(0, 0)).toBe(0));
test('-1 + 1 = 0', () => expect(add(-1, 1)).toBe(0));

console.log('\n[뺄셈 테스트]');
test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
test('0 - 5 = -5', () => expect(subtract(0, 5)).toBe(-5));

console.log('\n[곱셈 테스트]');
test('3 × 7 = 21', () => expect(multiply(3, 7)).toBe(21));
test('0 × 100 = 0', () => expect(multiply(0, 100)).toBe(0));

console.log('\n[나눗셈 테스트]');
test('20 ÷ 4 = 5', () => expect(divide(20, 4)).toBe(5));
test('0으로 나누면 에러 발생', () => {
  try {
    divide(10, 0);
    throw new Error('에러가 발생해야 합니다');
  } catch (e) {
    expect(e.message).toBe('0으로 나눌 수 없습니다');
  }
});

console.log('\n[거듭제곱 테스트]');
test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));
test('5 ^ 0 = 1', () => expect(power(5, 0)).toBe(1));
test('3 ^ 2 = 9', () => expect(power(3, 2)).toBe(9));

console.log(`\n결과: ${passed}개 통과, ${failed}개 실패\n`);
