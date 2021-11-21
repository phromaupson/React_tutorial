//Destructuring (การสลายโครงสร้าง)

//รูปแบบของ array
const colors = ["เขียว", "แดง", "เหลือง"]
    // const green = colors[0]
    // const red = colors[1]
    // const yellow = colors[2]

//const [green, red, yellow] = colors

// console.log(green)
// console.log(red)
// console.log(yellow)

//ต้องการแค่สีเหลืองอย่างเดียว 
// const [, , yellow] = colors

// console.log(yellow)

//รูปแบบของ object
const product = {
    productName: "คอมพิวเตอร์",
    price: 30000,
    stock: 10
}

//แบบเก่า
// const productName = product.productName
// const price = product.price
// const stock = product.stock

//แบบใหม่
// const {
//     productName: productName,
//     price: price,
//     stock: stock
// } = product

// console.log(productName)
// console.log(price)
// console.log(stock)

//-----------------------------------------

// const {
//     productName: n,
//     price: p,
//     stock: s
// } = product

// console.log(n)
// console.log(p)
// console.log(s)

//--------------------------------------------

const {
    productName: productName,
    stock: stock
} = product

console.log(productName)
console.log(stock)