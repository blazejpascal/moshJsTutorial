// const Obj  = {
//     street: 'lubuska',
//     city: 'wrocław',
//     zipCode: '990-09'
// }
//
// function renderProps (sampleObj) {
//     for (let key in sampleObj) {
//         console.log(key, sampleObj[key])
//     }
// }
//
// console.log(renderProps(Obj))


// function makeObj(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }
//
// const newObj = makeObj("Lubuska", "wrocław", '990-89' )
// console.log(newObj)
//
// function MakeObjConstructor(street, city, zipCode) {
//     this.street = street
//     this.city = city
//     this.zipCode = zipCode
// }
//
// const newSecondObj = new MakeObjConstructor("lubuska", 'wrocław', '00-098')
// console.log(newSecondObj)
//
// function MakeObjConstructor(street, city, zipCode) {
//     this.street = street
//     this.city = city
//     this.zipCode = zipCode
// }
//
// let address1 = new MakeObjConstructor('a', 'b', 'c')
// let address2 = new MakeObjConstructor('a', 'b', 'c')
//
//
// function areEqual(add1, add2) {
//     let counter = 0
//     for (let key in address1) {
//        if (add1[key] === add2[key]) {
//            counter++
//        }
//
//     }
//     return (counter === Object.keys(add2).length) ? "equal" : 'non equal'
// }
//
// function areSame(add1, add2) {
//     return add1 === add2
// }
//
//
// console.log(areEqual(address1,address2))
// console.log(areSame(address1, address2))


// const post = {
//     title: 'Super Post',
//     body: 'w tym super poście pokażemy to i owo',
//     author: 'WTW',
//     views: 240,
//     comments: [
//         {
//            author: 'WTW',
//            body: 'Superkomentarz do superpostu'
//          },
//     ],
//     isLive: true
// }
//
//
//
// function Post(title, body, author,) {
//     this.title = title
//     this.body = body
//     this.author = author
//     this.views = 0
//     this.comments = []
//     this.isLive = false
//
// }
//
// const newPost = new Post('a', 'b', 'c')
// console.log(newPost)


const pricesArray = []
const content = [
    ['$', 'cheap', 10, 20],
    ['$$', 'more expensive', 20, 30],
    ['$$$', 'expensive', 40, 50],
    ['$$$$', 'posh', 50, 60],
]


function PricesRange(symbol, tooltip, minValue, maxValue) {
    this.symbol = symbol
    this.tooltip = tooltip
    this.minValue = minValue
    this.maxValue = maxValue
}

function addToArray(array, object) {
    array.push(object)
}

function createPricesMenu(array, content, constructor, pushFunc) {
    for (let item of content) {
        pushFunc(array, new constructor(...item))
        console.log('działam')
    }
    return array
}

console.log(createPricesMenu(pricesArray,content, PricesRange, addToArray))

