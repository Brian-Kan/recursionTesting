// Write a function using recursion that takes a base and an exponent and outputs the power.
// e.g.
// power (2, 3) -> 8
// power (4, 2) -> 16

// const power = function (base, exponent) {
//     // base^exponent
//     // return power
// }

// Factorial
const factorial = function (n) {
    var result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

// console.log(factorial(3))


// Recursive Factorial
const recFac = function (n) {
    if (n <= 1) {
        console.log("returned 1", n)
        return 1;
    } else {
        console.log(n)
        return n * recFac(n - 1);
    }
}

// console.log(recFac(3))



// Exponent
const exponent = function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}

// console.log(exponent(5,3))


// Recursive exponent
const recExp = function pow(x, n) {
    if (n == 1) {
      console.log("If condition 1.  This is n:", n)
      return x;
    } else {
    //   console.log("This is x:",x)
      console.log("This is n:", n)
      return x * pow(x, n - 1);
    }
  }

//   console.log(recExp(5,5))



// ======================================
// PALINDROMES !!!!
// ======================================
// racecar
// otto
// mom

// ---------------------
// SUPER CHALLENGE!!!
//---------------------
// A nut for a jar of tuna.
// Murder for a jar of red rum.
// =======================================

// START!

const racecar = "RaCecAr"
const otto = "Otto"
const mom = "mom"

const superQwerty = "qwertyPytrewq"
const busted = "BuSTed"
const numbers = "123454321"

const superCh1 = "A nut for a jar of tuna"
const superCh2 = "Murder for a jar of red rum"


// STEPS
// function must:
// split() the string
// push each item into an array[]

// compare first to last, second to second-last, etc.
// if everything matches alert "This is a palindrome"
// if not, alert "This is NOT a palindrome"

// Challenge: odd number of letters vs even number of letters.

const palindrome = function (word) {
    // const palArray = []

    // This removes the spaces if the palindrome is a sentence.
    const spaceRemoval = word.replace(/ /gi, "")

    // This places all the letters in lower case as the matching is case sensitive.
    const lowerWord = spaceRemoval.toLowerCase()

    // This places all the letters in an array for easier management.
    const letterArray = lowerWord.split("")
    
    // This function compares the letters of the palindromes for their respective match.
    for (i = 0; i < letterArray.length; i++){
        // countdown is to 
        let countdown = i + 1

        if (letterArray[i] == letterArray[letterArray.length - countdown]){
            console.log(`letterArray[${letterArray[i]}]:`, letterArray[i])
            console.log(`matching letter [${letterArray[letterArray.length - countdown]}]:`, letterArray[letterArray.length - countdown])
        } else {
            console.log("Something went wrong")
        }

    }
    return `"${word}" is a palindrome!`    
}

// console.log(palindrome(superCh1))



// RECURSIVE VERSION !!!!!!

// I must identify the repeating pattern and create a function that utilizes recursiveness.

// initial start point
// iteration break point / difference / pattern
// call in on itself


// initial start point
// -- start with the first and last in the array

// iteration break point / difference / pattern from one set to the next set
// EXAMPLE: 6 letter word
// -- first => second / last => second-last
// ---- second => third / second-last => third-last
// ------ third => fourth / third-last => fourth-last

// the difference is one MORE from the first and one LESS from the last
// x = x + 1 and y = y - 1

// THEREFORE: palindromes START with the first letter AND the last letter.  That's it.
// The recursion equation will compare x + 1 == y - 1 where '1' is the iterable.



// understand the basic format of recursion and ***** have it call in on itself !!

// Function starts with what it's taking in
// it has an 'if' statement
// first line is the 'stop'
// second is the equation that calls in on itself to continue

const recPalin = function (word) {
    console.log('recPalin function is firing')
    // This removes the spaces if the palindrome is a sentence.
    const spaceRemoval = word.replace(/ /gi, "")

    // This places all the letters in lower case as the matching is case sensitive.
    const lowerWord = spaceRemoval.toLowerCase()

    // This places all the letters in an array for easier management.
    const letterArray = lowerWord.split("")

    const wordLength = lowerWord.length

    const firstLetter = lowerWord.charAt(0)
    const lastLetter = lowerWord.charAt(wordLength - 1)

    console.log(`Prior to the if statement, the first letter is: ${firstLetter} and the last letter is: ${lastLetter}.`)

    // Error handle -- check the 2 matching letters
    // IF they don't match, exit
    if (firstLetter !== lastLetter) {
        console.log(`The first letter is: ${firstLetter}`)
        console.log(`The last letter is: ${lastLetter}`)
        console.log("You are at the letter error handling stage.")
        return `${word} is not a palindrome`
    }

    // alternatively for below for exiting: if (word.length == 0 || 1)
    // letterArray.length == 0 || 1
    if (word.length == 0 || 1) {
        console.log("You are at the recursion exit stage.")
        return console.log(`${word} is a palindrome!`)
    } else {
        const secondLetter = word.charAt(1)
        const penultLetter = word.charAt(length - 1)
        const wordFragment = word.substring(secondLetter, penultLetter)
        console.log("typeof wordFragment is:", typeof wordFragment)
        return recPalin(wordFragment)
    }
    
    // if (letterArray[1] == letterArray[letterArray.length]) {
    //     return `${word} is a palindrome!`
    // } else {
    //     return recPalin(word)
    // }
    

    // if they do match, run the function again



    // if(the counter reaches the end.  what is the end? palindrome[i] = palindrome[array.length]) {
    //     // stop
    //     x != y
    //     return something
    // } else {
    //     // continue
    //     return recPalin(x+1)
    //     return recPalin(y-1)
    // }
}

recPalin(racecar)


// NOTE 1: there may be multiple error handling processes that must take place BEFORE the recursion process happens
// palindrome pattern is most likely very simple.  EXAMPLE:
// x + 1 == y - 1

// NOTE 2: I am learning that palindromes are small, simple functions that run a check and repeat itself until the pattern has ended.
// Most  everything else (error handling, parsing, placing into arrays etc.) are typically done in a more global function BEFORE the recursive function.

// NOTE 3: Recursion does NOT mean the ENTIRE function is recursive.  It means a portion of the overall function may be.


// Fib recursion exercise



// MAKE IT REUSABLE