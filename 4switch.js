// 조건문 Conditional Statement

// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우

let day = 10; // 0:월요일, 1: 화요일, 2:수요알 ..., 6:일요일
let dayName;

// if (day === 0) {
//     dayName = "일요일";
// } else if (day === 1) {
//     dayName = "월";
// } else if (day === 2) {
//     dayName = "화";
// } else if (day === 3) {
//     dayName = "수";
// } else if (day === 4) {
//     dayName = "목";
// } else if (day === 5) {
//     dayName = "금";
// } else if (day === 6) {
//     dayName = "토";
// }

//스위치는 case 다음 값 파라미터는 변수명
switch (day) {
    case 0:
        dayName = "일요일";
        break;
    case 1:
        dayName = "월요일";
        break;
    case 2:
        dayName = "화요일";
        break;
    case 3:
        dayName = "수요일";
        break;
    case 4:
        dayName = "목요일";
        break;
    case 5:
        dayName = "금요일";
        break;
    case 6:
        dayName = "토요일";
        break;
    default:
        console.log("해당하는 요일이 없음!");
}

console.log(dayName);
