// 간단한 계산기 함수 모음

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('0으로 나눌 수 없습니다');
  }
  return a / b;
}

// 거듭제곱 함수 추가
function power(base, exponent) {
  if (exponent < 0) {
    throw new Error('지수는 0 이상이어야 합니다');
  }
  return Math.pow(base, exponent);
}

module.exports = { add, subtract, multiply, divide, power };
