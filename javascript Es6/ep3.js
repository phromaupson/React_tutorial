//ทำงานกับ object

//ตัวแปรเก็บข้อมูล
const username = "kam"
const age = 24
const address = "กรุงเทพมหานคร"

// const customer = {
//     customerName: "แก้ม",
//     age: 24,
//     address: "กรุงเทพ"
// }

// const customer = {
//     customerName: username,
//     age: age,
//     address: address
// }

//ในกรณีที่ชื่อเหมือนกันยุบตัวเดียว
const customer = {
        customerName: username,
        age,
        address,

        showData() {
            console.log("ข้อมูลลูกค้าชื่อว่า =" + this.customerName)
        }
    }
    //console.log(customer);
customer.showData()