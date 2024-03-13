//산술 연산자
// + 더하기
// - 빼기
// * 곱하기
// % 나머지 값
// / 나누기
// **(거듭제곱) // es7

console.log(5 + 2);
console.log(5 === 2);
console.log(5 % 2);
console.log(Math.pow(5, 2)); // 거듭제곱

// + 연선자 주의점!

let text = "두개의" + "문자";
console.log(text);
text = "1" + 1; // 숫자와 문자열을 더하면 문자열로 변환됨
console.log(typeof text);
