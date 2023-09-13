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
    
//     }, 3000);
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

const inputName = document.querySelector("#name")
const submitButton = document.querySelector("#submit")

submitButton.addEventListener('click', () => {


    function matchVowel(str) {

        return str.match(/[aeiouAEIOU]/g).length

    }
    
    
    setTimeout(() => {

        let input = inputName.value

        const nameMatch = matchVowel(input)

        console.log(nameMatch)

        document.getElementById('ans').innerHTML = nameMatch
        
    }, 3000);

})