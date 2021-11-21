//ทำงานกับ string

// const address = `ชื่อลูกค้า : เด็กหญิงแก้ม 
// ที่อยู่ 555/100 ถนนเฮฮา อำเภอเมือง จังหวัดภูเก็ต 
// เบอร์ติดต่อ : 092-2643259`

let customerName = "เด็กชายคมศักดิ์"
let tel = "191"
let address = "ภูเก็ต"

const city = `ชื่อลูกค้า : ${customerName} 
ที่อยู่ : ${address}
เบอร์ติดต่อ : ${tel}`

console.log(city);