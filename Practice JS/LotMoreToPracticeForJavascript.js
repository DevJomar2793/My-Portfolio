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

const inputName = document.querySelector('#name')
const submitButton = document.querySelector('#submit')


submitButton.addEventListener('click', () => {

    let input = inputName.value

    function alphaOrder(str) {

        return str.split('').sort().join('')
    }
    
    
    setTimeout(() => {
        
        const inputOrder = alphaOrder(input)

        console.log(inputOrder)
    
    }, 3000);
})

