//클래스 활용
class Notebook {
    constructor(name, price, company) {
        this.name = name
        this.price = price
        this.company = company
    }
}

const notebook1 = new Notebook('Macbook', 2000000, 'Apple')

console.log(notebook1)
console.log(notebook1.name)
console.log(notebook1.price)
console.log(notebook1.company)

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    printInfo() {
        console.log(`name : ${this.name}, price : ${this.price}`)
    }
}

const notebook = new Product('Macbook', 2000000)

notebook.printInfo()

//객체 리터럴 활용
const computer = {
    name : 'Apple Macbook',
    price : 20000000,
    printInfo: function() {
        console.log(`name : ${this.name}, price : ${this.price}`)
    }
}

computer.printInfo()

//의류쇼핑몰을 만들 때 색깔, 사이즈, 속성을 바로 확인할 수 있도록 하는 매소드, 클래스와 객체 활용
//클래스 활용
class Shop {
    constructor(color, size, price){
        this.color = color
        this.size = size
        this.price = price
    }
    printInfo() {
        console.log(`color : ${this.color}, size : ${this.size}, price : ${this.price}`)
    }
}

const coat = new Shop('pick', 'L', 100000)
const pants = new Shop('black', 'XS', 24000)

coat.printInfo()
pants.printInfo()

//객체로 바로
const clothes = {
    color : 'pink',
    size : 26,
    price : 35000,
    printInfo: function() {
        console.log(`color : ${this.color}, size : ${this.size}, price : ${this.price}`)
    }
}

clothes.printInfo()