function hello(price1, price2, price3) {
    const avg = (price1 + price2 + price3) / 3
    return avg
}

const priceA = 1000
const priceB = 3200
const priceC = 4500
const avg1 = hello(priceA, priceB, priceC)
console.log(`평균 : ${avg1}`)
