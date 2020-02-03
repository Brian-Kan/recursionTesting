// ==========================================================================

// ======================================
// PALINDROMES !!!!
// ======================================
// Write a function that can determine if a word or sentance is a palindrome (something that is spelled the same way when written forwards or backwards). 
// The function must utilize recursion

// ---------------------
// Sample words to test
// ---------------------
// racecar
// otto
// mom
// bInKy

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
const binky = "bInKy"

const superQwerty = "qwertyPytrewq"
const busted = "BuSTed"
const numbers = "123454321"

const superCh1 = "A nut for a jar of tuna"
const superCh2 = "Murder for a jar of red rum"


const recPalin = function (word) {
    // This removes the spaces if the palindrome is a sentence.
    const spaceRemoval = word.replace(/ /gi, "")

    // This places all the letters in lower case as the matching is case sensitive.
    const lowerWord = spaceRemoval.toLowerCase()

    const wordLength = lowerWord.length
    const firstLetter = lowerWord.charAt(0)
    const lastLetter = lowerWord.charAt(wordLength - 1)


    // Error handle -- check the 2 matching letters
    // IF they don't match, exit
    if (firstLetter !== lastLetter) {
        const failOutcome = console.log(`"${word}" is NOT a palindrome`)
        return failOutcome
    }

    // alternatively for below for exiting: if (word.length == 0 || 1)
    // letterArray.length == 0 || 1
    if (word.length == 0 || 1) {
        const exitOutcome = console.log(`"${word}" IS a palindrome!`)
        return exitOutcome
    } else {
        const secondLetter = word.charAt(1)
        const penultLetter = word.charAt(length - 1)
        const wordFragment = word.substring(secondLetter, penultLetter)
        return recPalin(wordFragment)
    }
    
}

recPalin(racecar)
recPalin(otto)
recPalin(mom)
recPalin(binky)
recPalin(superQwerty)
recPalin(busted)
recPalin(numbers)
recPalin(superCh1)
recPalin(superCh2)