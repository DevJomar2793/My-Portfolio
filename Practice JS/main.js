//1. Print all even numbers from 0 – 10

// const submitButton = document.querySelector("#number")

// submitButton.addEventListener('click', () => {

//     function evenNumber(){

//         let even = 0

//         for (let i = 1; i <= 10; i++) {

//            even = i * 2

//            console.log(even)
//         }
   
//     }

//   evenNumber()
    
// })


/////////////////////////////////////////////////////////////////////////////////////////////////

//2. Print a table containing multiplication tables

// const submitButton1 = document.querySelector("#multiple1")
// const submitButton2 = document.querySelector("#multiple2")
// const submitButton3 = document.querySelector("#multiple3")
// const submitButton4 = document.querySelector("#multiple4")
// const submitButton5 = document.querySelector("#multiple5")
// const submitButton6 = document.querySelector("#multiple6")
// const submitButton7 = document.querySelector("#multiple7")
// const submitButton8 = document.querySelector("#multiple8")
// const submitButton9 = document.querySelector("#multiple9")

// submitButton1.addEventListener('click', () => {


//   function multi1(){

//     let mult1 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult1 = i * 1

//       console.log("1 x " + i + " = " + mult1)

//     }
//   }

//   multi1()
    
// })

// submitButton2.addEventListener('click', () => {


//   function multi2(){

//     let mult2 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult2 = i * 2

//       console.log("2 x " + i + " = " + mult2)

//     }
//   }

//   multi2()
    
// })

// submitButton3.addEventListener('click', () => {


//   function multi3(){

//     let mult3 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult3 = i * 3

//       console.log("3 x " + i + " = " + mult3)

//     }
//   }

//   multi3()
    
// })

// submitButton4.addEventListener('click', () => {


//   function multi4(){

//     let mult4 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult4 = i * 4

//       console.log("4 x " + i + " = " + mult4)

//     }
//   }

//   multi4()
    
// })

// submitButton5.addEventListener('click', () => {


//   function multi5(){

//     let mult5 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult5 = i * 5

//       console.log("5 x " + i + " = " + mult5)

//     }
//   }

//   multi5()
    
// })

// submitButton6.addEventListener('click', () => {


//   function multi6(){

//     let mult6 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult6 = i * 6

//       console.log("6 x " + i + " = " + mult6)

//     }
//   }

//   multi6()
    
// })

// submitButton7.addEventListener('click', () => {


//   function multi7(){

//     let mult7 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult7 = i * 7

//       console.log("7 x " + i + " = " + mult7)

//     }
//   }

//   multi7()
    
// })

// submitButton8.addEventListener('click', () => {


//   function multi8(){

//     let mult8 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult8 = i * 8

//       console.log("8 x " + i + " = " + mult8)

//     }
//   }

//   multi8()
    
// })


// submitButton9.addEventListener('click', () => {


//   function multi9(){

//     let mult9 = 0

//     for (let i = 1; i <= 10; i++) {

//       mult9 = i * 9

//       console.log("9 x " + i + " = " + mult9)

//     }
//   }

//   multi9()
    
// })

/////////////////////////////////////////////////////////////////////////////////////////////////

//3. Create a length converter function


// const inputNumber = document.querySelector("#input")
// const submitNumber = document.querySelector("#submit")

// submitNumber.addEventListener('click', () => {

//     function convertKM(){

//         let convert = inputNumber.value
//         let solution

//         solution = convert * 0.62137119

//         return Math.round(solution) + " Miles"

//     }

//     alert(convertKM())

// })


/////////////////////////////////////////////////////////////////////////////////////////////////


//4. Calculate the sum of numbers within an array

// const submitButton = document.querySelector('#submit')

// submitButton.addEventListener('click', () =>{

//     function sumArray() {

//         let value = [2, 56, 23, 76, 123]
//         let sum = 0
        
//         for (let i = 0; i < value.length; i++) {

//             sum += value[i]
//         }

//         return sum
//     }

//     alert(sumArray())
// })


/////////////////////////////////////////////////////////////////////////////////////////////////

//5. Create a function that reverses an array

// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener('click', () => {

//     function reverseArray() {

//         let arrayNum = [10, 20, 35, 70, 100]
        
//         return arrayNum.reverse()
//     }

//     alert(reverseArray())
    
// })

/////////////////////////////////////////////////////////////////////////////////////////////////

//6. Sort an array from lowest to highest

// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener('click', () => {
    
    
//     let arrayNum = [23, 45, 7, 1070, 567]
    

//     function sortArray(a, b) {

//         return a - b

        
//     }

//     alert(arrayNum.sort(sortArray))

        
//  })


/////////////////////////////////////////////////////////////////////////////////////////////////

//7. Sort an array from lowest to highest

// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener('click', () => {

    
//     let nums = [23, -22, 34, -100, 65, -89]

//     function filterNumber(num) {
        
//         return num < 0
//     }

//     alert(nums.filter(filterNumber))
// })


/////////////////////////////////////////////////////////////////////////////////////////////////

//8. Remove the spaces found in a string

// const inputName = document.querySelector('#input')
// const submitButton = document.querySelector('#submit')

// submitButton.addEventListener('click', () => {


//     function removeSpace() {

//         let name = inputName.value
//         let newName
        
//         newName = name.replace(/ /g, "")

//         return newName

//     }

//     alert(removeSpace())
// })

/////////////////////////////////////////////////////////////////////////////////////////////////

//9. Return a Boolean if a number is divisible by 10

// const inputNumber = document.querySelector("#input")
// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener('click', () => {

    

//     function boolean() {
        
//         let num = inputNumber.value

//         const div = num % 10 === 0 ? "The number is Divisible by 10": num % 5 === 0 ? "The number is Divisible by 5": "Invalid Number/Not Divisible"

//         return div
//     }

//    alert(boolean())
// })


/////////////////////////////////////////////////////////////////////////////////////////////////

//10. Return the number of vowels in a string
    
// const inputName = document.querySelector('#input')
// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener('click', () => {

//     let name = inputName.value

//     function vowelsString(str) {

//       const vowels = str.match(/[aeiou]/gi).length

//         return vowels

//      }

//      alert(vowelsString(name))
// })


/////////////////////////////////////////////////////////////////////////////////////////////////

//11. Return the Sum of Two Numbers


// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener('click', () => {

//   function sumNumber(num1, num2) {
    
//     let sum

//     sum = 5 + 5 

//     return sum

//   }

// alert(sumNumber())

// })

/////////////////////////////////////////////////////////////////////////////////////////////////

//12. The Recipe Card

// const recipe = {
  
//   'title': 'Mole',
//   'servings': 2,
//   'ingredients': ['Cinnamon', 'Cumin', 'Cocoa']

// }

// console.log('Title: ' + recipe.title)
// console.log('Servings: ' + recipe.servings)
// console.log('Ingredients: ')


// for (let i = 0; i < recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i])
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

//13. TThe Reading List

// const readingList = [
//   {
//     title: 'The Design of Everyday Things',
//     author: 'Don Norman',
//     alreadyRead: false
//   },
//   {
//     title: 'The Most Human Human',
//     author: 'Brian Christian',
//     alreadyRead: true
//   }
// ]

// for (let i = 0; i < readingList.length; i++) {
//   readList = readingList[i]
//   const bookInfo = 'Title: ' + readList.title + " " + "by" + " " + "Author: " + readList.author
//   // console.log(bookInfo)
  
//   const boolean = readList.alreadyRead ? "You Already Read" + bookInfo: "You Still need to read" + bookInfo

//   console.log(boolean)


// }

/////////////////////////////////////////////////////////////////////////////////////////////////

//13. Return Age > 18

// const family = [
//   {
//     name: 'Jomar',
//     age: 30,
//     aboveAge: true

//   },
//   {
//     name: 'Arisa',
//     age: 25,
//     aboveAge: true
//   },
//   {
//     name: 'Elliana Jae',
//     age: 1,
//     aboveAge: false
//   }
// ]

// for (let i = 0; i < family.length; i++) {
//     pamilya = family[i]
//     pamilya1 = "name: " + pamilya.name + " " + "age: " + pamilya.age
    
//    const ageLegal = pamilya.age > 18 ? "Your in Legal Age " + pamilya1: "Your not in legal Age " + pamilya1

//    console.log(ageLegal)
    
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

//14. Bound Copies Print Full name and details

// const fullDetails = [
//   {
//     firstname: 'Jomar',
//     lastname: 'Cerrado',
//     age: 30

//   },
//   {
//     firstname: 'Arisa',
//     lastname: 'Acopiado',
//     age: 25
//   },
//   {
//     firstname: 'Elliana Jae',
//     lastname: 'Cerrado',
//     middlename: 'Acopiado',
//     age: 1
//   }

// ]

// for (let i = 0; i < fullDetails.length; i++) {
//       const boundFullName = fullDetails[i]

//       console.log("My name is " + boundFullName.firstname + " " + boundFullName.lastname )

//       console.log("My age is " + boundFullName.age + " Year/s old" )


// }


/////////////////////////////////////////////////////////////////////////////////////////////////

//W3Source Object Exercise

//1. Write a JavaScript program to list the properties of a JavaScript object.

// const person = {
//   firstname: 'Jomar',
//   lastname: 'Cerrado',
//   age: 30
// }

// console.log("My name is " + person.firstname + " " + person.lastname)
// console.log("My age is " + person.age)

/////////////////////////////////////////////////////////////////////////////////////////////////

//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// const student = {
//   name: 'Jomar',
//   age: 30,
//   course: 'BSIT',
//   year: '1st Year'
// }


// const summary = student
// console.log(summary)
// delete student.age
// console.log(summary)

/////////////////////////////////////////////////////////////////////////////////////////////////

//3. Write a JavaScript program to get the length of a JavaScript object.

// const library = [
//   {
//     title: 'ABSALOM, ABSALOM!',
//     author: 'WILLIAM FAULKNER',
//     date: '1936', 
//     alreadyRead: true
//   },
//   {
//     title: 'A TIME TO KILL',
//     author: 'JOHN GRISHAM',
//     date: '1862', 
//     alreadyRead: false
//   },
//   {
//     title: 'THE HOUSE OF MIRTH',
//     author: 'EDITH WHARTON',
//     date: '1905', 
//     alreadyRead: true
//   },
//   {
//     title: 'EAST OF EDEN',
//     author: 'JOHN STEINBECK',
//     date: '1952', 
//     alreadyRead: false
//   },
//   {
//     title: 'THE SUN ALSO RISES',
//     author: 'ERNEST HEMINGWAY',
//     date: '1926', 
//     alreadyRead: true
//   },
  
// ]


// for (let i = 0; i < library.length; i++) {

//   let book = library[i]

//   let summary = book.title + " " + book.author



//   const displayBooks = book.alreadyRead ? "These is the book you already read: " + summary: "These is the book that you need to read: " + summary

// console.log(displayBooks)

// }


// setInterval(myFunction, 1000)


// function myFunction() {

// let d = new Date()

// console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() )
// }








    

