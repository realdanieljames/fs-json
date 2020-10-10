const fs = require('fs')

const jsonAddressList = fs.readFileSync('addressList.json', 'utf-8')

if(jsonAddressList === ''){
    console.log('There is no data in the file')
}
else {
    let obj = JSON.parse(jsonAddressList)
    
    console.log(obj)
//     jsonAddressList.map((value) => {
//         // value = JSON.stringify(value)
//         // console.log(value)
//         // convert JSON object to string so
//         // fs.writeFile can accept it
//         // fs writeFIle doesnt accept JSON context
//         // console.log(value.address.street)
//         let result =
//             `
//     ${value.name}
//     Address:    ${value.address.street}, ${value.address.suite}
//                 ${value.address.city}, ${value.address.zipcode}
//     Phone:      ${value.phone}
//     Email:      ${value.email}
//     `
// console.log(result)

// })
}


// console.log(jsonAddressList)