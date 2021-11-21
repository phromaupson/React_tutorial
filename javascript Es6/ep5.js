//Spread Operator
//-----------------------------------------------
// const newArr = [100, 200, 300]
// const data = [10, 20, newArr]

// console.log(data)
//[ 10, 20, [ 100, 200, 300 ] ]
//------------------------------------------------
//ต้องการกระจายอาเรย์ข้างใน
// const newArr = [100, 200, 300]
// const data = [10, 20, ...newArr]

// console.log(data)
//[ 10, 20, 100, 200, 300 ]
//-----------------------------------------------

//แบบสติง

// const colors = ["เขียว", "น้ำเงิน", "ขาว"]
// const allColors = ["แดง", "เหลือง", ...colors]

// console.log(allColors)
//[ 'แดง', 'เหลือง', 'เขียว', 'น้ำเงิน', 'ขาว' ]

//------------------------------------------------

//push คือการผลักข้อมูลเข้าไปแทรก

const colors = ["เขียว", "น้ำเงิน", "ขาว"]
const allColors = ["แดง", "เหลือง", ...colors]

const newColors = ["ดำ", "เทา"]

allColors.push(...newColors)

console.log(allColors)