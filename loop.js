let temperature = 20
while (temperature < 25) {
    console.log(`${temperature}도 정도면 적당한 온도입니다`)
    temperature++ //증감연산자를 활용해 온도 변화시키기
}

for (let temperature = 20; temperature < 25; temperature++) {
    console.log(`${temperature}도 정도면 적당한 온도입니다.`)
}

for (let number = 1; number <= 10; number++) {
    if (number % 3 === 0) {
        console.log(`${number}는 3으로 나눠서 떨어지는 숫자입니다.`)
    }
}

for (let a = 1; a <= 20; a++) {
    if (a % 2 === 0) {
        console.log(`숫자 ${a}는 짝수입니다.`)
    } else {
        console.log(`숫자 ${a}는 홀수입니다.`)
    }
}