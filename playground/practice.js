const fs = require('fs')
const book ={
    author:'Mohamed',
    name:'ay 7aga'
}
const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData =  JSON.parse(bookJSON)
// console.log(parseData.author)
// fs.writeFileSync('practice.json', bookJSON)

// const dataBuffer = fs.readFileSync('practice.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)

const dataBuffer = fs.readFileSync('practice.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name ='Norhan'
user.age = 25
const UserJSON = JSON.stringify(user)
fs.writeFileSync('practice.json', UserJSON)
const otheruser = JSON.parse(dataJSON)
otheruser.name ='Noha'
otheruser.age = 88
const User2JSON = JSON.stringify(otheruser)
fs.writeFileSync('practice.json', User2JSON)
