const fs = require('fs')
const axios = require('axios')


let url = 'https://jsonplaceholder.typicode.com/users'

async function grabData(url) {

    try {

        const response = await axios.get(url);
        const data = await response.data;



            data.map((value) => {
                // value = JSON.stringify(value)
                // console.log(value)
                // convert JSON object to string so
                // fs.writeFile can accept it
                // fs writeFIle doesnt accept JSON context
                // console.log(value.address.street)
                let result =
                    `
            ${value.name}
            Address:    ${value.address.street}, ${value.address.suite}
                        ${value.address.city}, ${value.address.zipcode}
            Phone:      ${value.phone}
            Email:      ${value.email}
            `


                // console.log(result)
                value = JSON.stringify(value, ',' ,2)


                // console.log(value)
                // constantly updates after each run, dont want that
                fs.appendFileSync('addressList.json', value, (err) => {
                    if (err) return console.log(err)
                })


            })


    }
    catch (err) {
        console.log(err)
    }


}

grabData(url)
