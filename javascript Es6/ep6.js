//Rest Parameter (คือการนำ array ไปใช้ในฟังชันก์ คือ paramiter)

// summation = (x, y) => {
//     return x + y
// }
// console.log(summation(50, 100))

//--------------------------------------

summation = (...numberArr) => {
    let total = 0

    for (let number of numberArr) {
        total += number
    }

    return total
}
console.log(summation(50, 100, 50));