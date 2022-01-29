//첫번째 방법
const arr1 = new Array(1, 2, 3, 4, 5)
console.log(arr1)

//두번째 방법(더 많이 쓰는 것)
const arr2 = [1, 2, 3, 4, 5]
console.log(arr2)

//배열 활용
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(rainbowColors[0])
console.log(rainbowColors[1])
console.log(rainbowColors[1] + ' ' + rainbowColors[6])

console.log(rainbowColors.length) //배열의 길이
console.log(rainbowColors[rainbowColors.length - 1]) // 배열의 마지막 요소 쉽게 찾기

rainbowColors.push('ultraviolet') //배열 추가
console.log(rainbowColors)

rainbowColors.pop('ultraviolet') //배열 삭제
console.log(rainbowColors)

//배열과 반복문
for (let i = 0; i < rainbowColors.length; i++) {
    console.log(rainbowColors[i])
}

//더 간단한 for문
for (const color of rainbowColors) {
    console.log(color)
}


//배열 안의 가격 합계와 평균을 구해라
const priceList = [3000, 2000, 1500, 4500, 9000, 9050, 4700, 5700, 2300, 1030]
let sum = 0

for (const price of priceList) {
    sum += price
}

const avg = sum / priceList.length
console.log(`합계 : ${sum}, 평균 : ${avg}`)
