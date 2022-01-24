console.log('Hello' + 'World')
console.log('1' + 3)
console.log(1 + 3)

//템플릿 리터럴
const shoesPrice = 20000
console.log('이 신발의 가격은' + shoesPrice + '원 입니다.')
console.log(`이 신발의 가격은 ${shoesPrice}원 입니다.`)

//산술 연산자
console.log(2 + 1) //3
console.log(2 - 1) //1
console.log(4 / 2) //2
console.log(2 * 3) //6
console.log(10 % 3) //나머지 1
console.log(10 ** 2) //10의 2승 100

//증감연산자
let count = 1
const preCount = ++count
console.log(`count: ${count}, preCount: ${preCount}`)
// 증감연산자가 앞에 있을 경우 먼저 자기 자신에게 1을 더하여 재할당 한 후, 이를 preCount에 할당했다는 의미
// count = count + 1
// const preCount = count

let count1 = 1
const preCount1 = count1++
console.log(`count: ${count1}, preCount: ${preCount1}`)
// 증감연산자가 뒤에 있을 경우 preCount에 자기 자신의 값을 먼저 할당하고, 이후에 1을 더해서 재할당
// const preCount = count
// count = count + 1

//대입연산자
const shirtsPrice = 100000
const pantsPrice = 80000
let totlaPrice = 0

totlaPrice += shirtsPrice
console.log(totlaPrice)

//비교연산자
console.log(1 < 2)
console.log(1 <= 2)
console.log(1 > 2)
console.log(1 >= 2)

//논리연산자 $$(둘다 true여야 true), ||(둘중 하나만 true여도 ture), !(true -> flase, flase -> true)
let isOnSale = true
let isDiscountItem = true

console.log(isOnSale && isDiscountItem) // true
console.log(isOnSale || isDiscountItem) // true

isOnSale = false
console.log(isOnSale && isDiscountItem) // false
console.log(isOnSale || isDiscountItem) // true

isDiscountItem = false
console.log(isOnSale && isDiscountItem) // false
console.log(isOnSale || isDiscountItem) // false

console.log(!isOnSale) // !false이므로 true

//일치연산자
console.log(1 === 1)
console.log(1 === 2)
console.log('Javascript' === 'Javascript')
console.log('Javascript' === 'javascript')

//Quiz
let price1 = 10000
let price2 = 25000
let totalPrice1 = price1 + price2
console.log(`총 ${totalPrice1 * 0.8}원에 물건을 구입합니다.`)

