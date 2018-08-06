//
//
// showNumbers(10);
//
// function showNumbers(limit) {
//     for(let i = 0; i<= limit; i++) {
//         (i%2 === 0) ? console.log(`${i}: EVEN`) : console.log(`${i}: ODD`)
//     }
// }
// const array = [1,2,3, null]
// const output = coutTrullt(array)
// console.log(output)
//
//
//
// function coutTrullt(array) {
//     let n = 0
//
//     for (element of array) {
//         if (element) {
//             n++
//         }
//     }
//     return n
// }
//
// const trial = array.filter(item => !!item ).length
//
//
// const trial2 = array.reduce((acc, item) => {
//     if (!!item) {
//         return acc + 1
//     }
//     return acc
// }, 0)
//
// // console.log(trial2)


// function sum(limit) {
//     let n = 0
//     for (let i = 0; i <= limit; i++ ) {
//         if (i%3 === 0 || i%5 === 0) {
//             n += i
//         }
//     }
//     return n
// }
//
// console.log(sum(10))

// const sum2 = Array(10).fill(0).reduce((acc, curretValue, index ) => ((index+1)%3 === 0 || (index+1)%5 === 0 ) ? index+1 + acc :  acc,  0)
// console.log(sum2)


// const marks = [80,80,50]
// console.log(calcGrade(marks))
//
// function calcGrade(marks) {
//     const avg = (marks.reduce((acc, currentValue) => acc + currentValue ,0)) / marks.length
//     if (avg < 59)
//         return 'Grade: F'
//
//     else if (avg >59 && avg < 69)
//         return 'Grade: D'
//
//     else if (avg >69 && avg < 79)
//         return 'Grade: C'
//
//     else if (avg >79 && avg < 89)
//         return 'Grade: B'
//
//     else if (avg >89 && avg <= 100)
//         return 'Grade: A'
//
// }
//
// function district(start, end) {
//     return (avg) => {
//         avg >= start && avg <= end
//     }
// }
//
// const F = district(1, 59)
//
// const D =


// function showStars(rows) {
//     for (let i=1; i<=rows; i++) {
//        const stars = Array(i).fill("*").join("")
//        console.log(stars)
//     }
// }
//
// showStars(10)


