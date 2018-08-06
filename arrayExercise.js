// function arrayFromRange(min, max) {
//     const array = []
//
//     for (let i = min; i<= max; i++) {
//         array.push(i)
//     }
//     return array
// }
//
// const numbers = arrayFromRange(-1, 9)
// console.log(numbers)


// function includes(array, searchElement) {
//     for (item of array) {
//       if (item === searchElement) {
//           return true
//       }
//       return false
//     }
// }
//
// const numbers = [1,2,3,4,5,6]
//
// const isIncluded = includes(numbers, 3)
// console.log(isIncluded)

// const numbers = [1,2,3,4,5,6]
//
// function move(array, index, offset) {
//     const position = index + offset
//     if (position >= array.length || position < 0) {
//         console.error('number to big')
//         return
//     }
//
//     const output = [...array]
//     const number = output.splice(index, 1)
//     output.splice(position, 0, ...number)
//     return output
// }
//
// const output = move(numbers, 0, 2)
// console.log(output)


numbers = [1,2,3,4,5,1,2]
//
// function countOccurrences(array, searchElement) {
//     let counter = 0
//     for (let key of array) {
//         if (key === searchElement) {
//             counter++
//         }
//     }
//     return counter
// }


const occurence = numbers.reduce((acc, currentValue) => {
    const times = (currentValue === 2) ? 1 : 0
    return acc + times

}, 0)

// console.log(countOccurrences(numbers, 2))
console.log(occurence)

