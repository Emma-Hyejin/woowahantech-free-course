function problem1(pobi, crong) {
  
//입력 : 임의로 주어지는 랜덤 페이지
//pobi와 crong의 길이는 2
//[왼쪽 페이지 번호, 오른쪽 페이지 번호]
//[예외사항] : 연속된 숫자가 아닐 경우
if(pobi[1]-pobi[0] != 1 || crong[1] - crong[0] != 1){
  return -1;
}

// pobi = new Array(2);
// crong = new Array(2);

// 1 ~ 400 p의 책/ 왼쪽 홀수, 오른쪽 짝수 
// [예외사항] : 왼쪽 짝수, 오른쪽 홀수 경우
if(pobi[0]%2 === 0 || pobi[1]%2 ===1 || crong[0]%2 ===0 || crong[1] %2 ===1){
  return -1
}

// [예외사항] : 시작 면이나 마지막 면이 나오지는 않음 ( [1,2], [399,400] 불가) 
if(pobi[0] ===1 || crong[0] ===1 || pobi[0] === 399 || crong[0] === 399){
  return -2;
}

// 1. 왼쪽 페이지 번호의 각 자리 숫자 모두 더하거나 곱해서 가장 큰 수 구하기 
let sumPobi_L = 0;
let multiplyPobi_L = 0;
for( let i = 0; i< pobi[0].length; i++){
  sumPobi_L += parseIntNumber((pobi[0].split));
}
// 2. 오른쪽 페이지 번호의 각 자리 숫자 모두 더하거나 곱해서 가장 큰 수 구하기 
// 3. (1)과 (2) 중 더 큰 수를 본인의 점수로 설정
// 4. pobi와 crong 점수 비교 

// 출력 : pobi 승 : 1 , 크롱 승 : 2, 무승부 : 0 , 예외사항 -1 return 
}
problem1([26,25], [27,28]);
// module.exports = problem1;