// ======================================
// PALINDROMES !!!!
// ======================================

// ---------------------
// Requirements:
// ---------------------
// Write a function that can determine if a word or sentance is a palindrome (something that is spelled the same way when written forwards or backwards). 
// The function must utilize recursion

// ---------------------
// Sample words to test
// ---------------------
// RaCecAr
// Otto
// mom
// bInKy

// ---------------------
// SUPER CHALLENGE!!!
//---------------------
// A nut for a jar of tuna
// Murder for a jar of red rum
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

    // This simply gets the length of the word after the spaces have been removed.
    const wordLength = lowerWord.length


    // The variables listed below (firstLetter, lastLetter) are important for the recursion part.  
    // As the word is (re)passed through the function, it removes the first and last letter of each iteration.
    // Example: 
    // On it's first pass, the word is: "racecar"
    // On the second it becomes: "aceca"
    // On the third it becomes: "cec"
    // On the fourth it becomes: "e"

    // This get the first of the word.
    const firstLetter = lowerWord.charAt(0)

    // This gets the last letter of the word.
    const lastLetter = lowerWord.charAt(wordLength - 1)


    // Error handle -- check the 2 matching letters
    // IF they don't match, exit
    if (firstLetter !== lastLetter) {
        const failOutcome = console.log(`"${word}" is NOT a palindrome`)
        return failOutcome
    }

    // This is the recursive portion of the code!!!!
    if (word.length == 0 || 1) {
        const exitOutcome = console.log(`"${word}" IS a palindrome!`)
        return exitOutcome
    } else {
        // As mentioned above, this is where the first and last letter of the word is removed.

        // Due to the nature of the substring method I need to specify the second letter and LAST letter.
        // Remember, the substring method will stop BEFORE the last letter.
        const secondLetter = word.charAt(1)
        const lastLetter = word.charAt(length - 1)
        const wordFragment = word.substring(secondLetter, lastLetter)
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