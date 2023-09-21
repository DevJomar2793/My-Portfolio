//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Write a JavaScript function that reverse a number

// const inputNumber = document.querySelector("#num")
// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener('click', () => {

//     let input = inputNumber.value

//     function reverseString(str){

//         return str.split('').reverse().join('')
//     }

//     setTimeout(() => {

//         let summary = reverseString(input)

//         console.log(summary)
        
//         document.getElementById("ans").innerHTML = summary

//     }, 3000)
    

// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order

// const inputName = document.querySelector('#name')
// const submitButton = document.querySelector('#submit')


// submitButton.addEventListener('click', () => {

//     let input = inputName.value

//     function alphaOrder(str) {

//         return str.split('').sort().join('')
//     }
    
    
//     setTimeout(() => {
        
//         const inputOrder = alphaOrder(input)

//         console.log(inputOrder)

//         document.getElementById("ans").innerHTML = inputOrder
    
//     }, 3000);
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// const inputName = document.querySelector("#name")
// const submitButton = document.querySelector("#submit")

// submitButton.addEventListener('click', () => {


//     function matchVowel(str) {

//         return str.match(/[aeiouAEIOU]/g).length

//     }
    
    
//     setTimeout(() => {

//         let input = inputName.value

//         const nameMatch = matchVowel(input)

//         console.log(nameMatch)

//         document.getElementById('ans').innerHTML = "Vowel Count: " + nameMatch
        
//     }, 3000);

// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// const inputName = document.querySelector('#name')
// const submitButton = document.querySelector('#submit')

// submitButton.addEventListener('click', () => {

//     function upperCase(str) {

//         let uppercase = str.split(' ')

//         let newArray = []

//         for (let i = 0; i < uppercase.length; i++) {

//             newArray.push(uppercase[i].charAt(0).toUpperCase() + uppercase[i].slice(1))
//         }

//         return newArray.join(' ')
//     }


//     setTimeout(() => {

//         let input = inputName.value

//         const upperCaseValue = upperCase(input)
        
//         console.log(upperCase(upperCaseValue))

//         document.getElementById("ans").innerHTML = "This is your Text: " + upperCase(upperCaseValue)

//     }, 3000)
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Write a JavaScript program to get the current date. (NOT YET DONE)

// const today = new Date()
// const dd = today.getDate()
// const mm = today.getMonth()+1
// const yy = today.getFullYear()
// const submitButton = document.querySelector('#submit1')

// if (dd < 10) {

//     dd = '0' + dd

// }

// if (mm < 10) {

//     mm = '0' + mm
// }

// today = mm + " - " + dd + " - " + yy

// console.log(today)

// submitButton.addEventListener('click', () => {

    
//     // setTimeout(() => {

        

//     // }, 1000);

//     if (dd < 10) {

//         dd = '0' + dd

//     } 
    
//     if (mm < 10) {

//         mm = '0' + mm

//     }
    
//     today = mm + '-' + dd + '-' + yy

//     console.log(today)


// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Write a JavaScript program to calculate number of days left until next Christmas.

// const submitButton = document.querySelector('#submit')

// submitButton.addEventListener('click', () => {
    
//     const today = new Date()

//     const cmas = new Date(today.getFullYear(), 11, 25 )

//     if(today.getMonth() == 11  && today.getDate() > 25) {

//         cmas.setFullYear(cmas.getFullYear()+1)
    
//     }
    
//     const one_day = 1000*60*60*24
    
//     const countdown = Math.ceil((cmas.getTime()-today.getTime())/(one_day)) + " Days left until Christmas"
    
//     setTimeout(() => {
        
//         console.log(countdown)

//         document.getElementById('ans').innerHTML = countdown
    
//     }, 3000);


// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

// const inputNumber1 = document.querySelector('#input1')
// const inputNumber2 = document.querySelector('#input2')
// const submitButton1 = document.querySelector('#submit1')
// const submitButton2 = document.querySelector('#submit2')


// submitButton1.addEventListener('click', ()=> {


//     let inputNum1 = inputNumber1.value
//     let inputNum2 = inputNumber2.value
    
//     function multiplication(num1, num2) {

//         const multiply = num1 * num2
    
//         return multiply
//     }
    
//     setTimeout(() => {
        
//         console.log(multiplication(inputNum1, inputNum2))

//         document.getElementById('ans').innerHTML = multiplication(inputNum1, inputNum2)

//     }, 1000);

// })

// submitButton2.addEventListener('click', () => {

//     let inputNum1 = inputNumber1.value
//     let inputNum2 = inputNumber2.value

//     function division(num1, num2) {

//         divide = num1 / num2

//         return divide
//     }

//     setTimeout(() => {
        
//         console.log(division(inputNum1, inputNum2))

//         document.getElementById('ans').innerHTML = division(inputNum1, inputNum2)

//     }, 1000);

    
// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Write a JavaScript program that accept two integers and display the larger.

// const inputNumber1 = document.querySelector('#input1')
// const inputNumber2 = document.querySelector('#input2')
// const submitButton = document.querySelector('#submit')



// submitButton.addEventListener('click', () => {

//     let input1 = inputNumber1.value
//     let input2 = inputNumber2.value

//     if(input1 > input2 ) {

//         console.log("the Larger of " + input1 + " & " + input2  + " is " + input1 + ".")

//         document.getElementById('ans').innerHTML = "the Larger of " + input1 + " & " + input2  + " is " + input1 + "."

//     } else if (input2  > input1) {

//         console.log("the Larger of " + input2  + " & " + input1 + " is " + input2  + ".")

//         document.getElementById('ans').innerHTML = "the Larger of " + input2 + " & " + input1  + " is " + input2 + "."

//     } else {

//         console.log("The Value of " + input1 + " & " + input2  + " are Equal")

//         document.getElementById('ans').innerHTML = "The Value of " + input1 + " & " + input2  + " are equal"
//     }

// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

// const inputNumber1 = document.querySelector('#input1')
// const inputNumber2 = document.querySelector('#input2')
// const inputNumber3 = document.querySelector('#input3')
// const submitButton = document.querySelector('#submit')


// submitButton.addEventListener('click', () => {

//     let input1 = inputNumber1.value
//     let input2 = inputNumber2.value
//     let input3 = inputNumber3.value

//     setTimeout(() => {
        
//         if(input1 > 0 && input2 > 0 && input3 > 0) {

//             document.getElementById('ans').innerHTML = "This is a Positive Numbers"
    
//         } else if (input1 < 0 && input2 > 0 && input3 > 0) {
    
//             document.getElementById('ans').innerHTML = "Number 1 is a Negative Number"
    
//         } else if (input1 > 0 && input2 < 0 && input3 > 0) {
    
//             document.getElementById('ans').innerHTML = "Number 2 is a Negative Number"
    
//         } else if (input1 > 0 && input2 > 0 && input3 < 0) {
    
//             document.getElementById('ans').innerHTML = "Number 3 is a Negative Number"
    
//         } else if (input1 < 0 && input2 < 0 && input3 > 0) {
    
//            document.getElementById('ans').innerHTML = "Number 1 & Number 2 is a Negative Numbers"
        
//         } else if (input1 > 0 && input2 < 0 && input3 < 0) {
    
//             document.getElementById('ans').innerHTML = "Number 2 & Number 3 is a Negative Numbers"
    
//         } else if (input1 < 0 && input2 > 0 && input3 < 0) {
    
//             document.getElementById('ans').innerHTML = "Number 1 & Number 3 is a Negative Numbers"
//         }
        
//         else {
    
//             document.getElementById('ans').innerHTML = "This is a negative Numbers"
//         }
    
//     }, 1000);
    
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Write a JavaScript function to check whether an `input` is an array or not. (NOT YET DONE)

// const inputName = document.querySelector('#input')
// const submitButton = document.querySelector('#submit')


// submitButton.addEventListener('click', () => {

//     let input1 = inputName.value

//     const is_array = function (input) {

//         if(toString.call(input) === "[object Array]") 
    
//             return true
//             return false
    
//     }

//     console.log(is_array(input1))

// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Write a JavaScript function to clone an array.

// array_clone = function (arra1) {

//     return arra1.slice(0)   
// }

// console.log(array_clone([1, 2, 3, 4]))
// console.log(array_clone([1, 2, [3, 4]]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Write a simple JavaScript program to join all elements of the following array into a string.

// const myArray = ["Orange", "Lemon", "Apple", "Banana", "Grapes"]

// console.log(myArray.toString())

// console.log(myArray.join())

// console.log(myArray.join('+'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Write a JavaScript program to sort the items of an array.


// const myArray = [-2, 0, 6, -8, -10, 23, 4, 100, -523]

// function compareArray(a, b) {

//     return a - b
// }

// console.log(myArray.join())

// console.log(myArray.sort())

// console.log(myArray.sort(compareArray))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Write a JavaScript program to display the colors in the following way

const myColor = ['blue', 'yellow', 'black', 'red', 'violet']

const myChoice = ['First Choice', 'Second Choice', 'Third Choice', 'Fourth Choice', 'Fifth Choice']





function thisChoice() {

    for(let i = 0; i < myColor.length; i++) {

      let  color += myColor[i]

       return i
    }
}

console.log(thisChoice())


// for (let x = 0; x < myChoice.length; x++){

//     let choice = myChoice[x]
    
//     console.log(choice)
// }











    
    
   





















