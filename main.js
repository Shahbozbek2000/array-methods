// 1. for
// 2. for of
// 3. for in
// 4. forEach 
// 5. map
// 6. reduce 
// 7. filter
// 8. find
// 9. findIndex
// 10. some 
// 11. every
// 12 while
// 13. do while

let numArr = [1, 5, 9, 10, 12, 15, 22, 48]
let peopleArr = [
   {
      firstName: 'Khumoyun',
      lastName: 'Inoyatov',
      age: 23,
      gender: 'male',
      isMarried: false,
      isDeveloper: true,
      budget: 1000,
      isAlive: true
   },
   {
      firstName: 'Shahbozbek',
      lastName: 'No`monjonov',
      age: 21,
      gender: 'male',
      isMarried: false,
      isDeveloper: true,
      budget: 2000,
      isAlive: true
   },
   {
      firstName: 'Murodbek',
      lastName: 'Rahimjonov',
      age: 23,
      gender: 'male',
      isMarried: false,
      isDeveloper: true,
      budget: 1500,
      isAlive: true
   },
]
let personObj = {
   firstName: 'Khumoyun',
   lastName: 'Inoyatov',
   age: 23,
   gender: 'male',
   isMarried: false,
   isDeveloper: true,
   budget: 1000,
   isAlive: true
}

//1. for(let i = 0; i < peopleArr.length; i++) {
//  console.log(peopleArr[i]) 
// }
// for (let element of peopleArr) {
//    console.log(element)
// }
// for(let xususiyat in personObj) {
//    console.log(xususiyat)
// }
// peopleArr.forEach(function(element, index, list) {
//    element.lastName = 'Inoyatov'
// })

// Array.prototype.helloForEach = function(cb) {
//    for(let i = 0; i < this.length; i++) {
//       cb(this[i], i, this)
//    }
// }
// peopleArr.helloForEach(function(item) {
//    console.log(item)
// })


Array.prototype.hasMap = function(cb) {
   let resultArr = []
   for(let i = 0; i < this.length; i++) {
      resultArr.push(cb(this[i], i, this))
   }
   return resultArr
}
let surnameList = peopleArr.hasMap(function (item, index, list) {
   return {
      ...item,
      lastName: 'Inoyatov',
      age: 45,
      isMarried: true
   }
}) 
console.log(peopleArr)
console.log(surnameList)