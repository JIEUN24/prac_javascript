const shoesPrice = 40000
if (shoesPrice < 50000) {
    console.log('이 신발을 사겠습니다.')
}

const capPrice = 30000
if (capPrice < 30000) {
    console.log('이 모자를 사겠습니다.')
}

const shirtsPrice = 30000
if (shirtsPrice < 20000) {
    console.log('신발을 사겠습니다.')
} else {
    console.log('너무 비싸요. 신발을 사지 않겠습니다.')
}

const notePrice = 30000
if (notePrice < 30000) {
    console.log('노트를 사겠습니다.')
} else if(notePrice <= 30000){
    console.log('생각해볼께요.')
} else {
    console.log('노트를 사지 않겠습니다.')
}

const distance = 2
if (distance < 2) {
    console.log('걸어가자')
} else if (2 <= distance < 5) {
    console.log('택시를 타요')
} else {
    console.log('기차를 탑시다')
}
