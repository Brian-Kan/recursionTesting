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

const racecar = "Racecar"
const otto = "Otto"
const mom = "mom"

// STEPS
// function must:
// split() the string
// push each item into an array[]

// compare first to last, second to second-last, etc.
// if everything matches alert "This is a palindrome"
// if not, alert "This is NOT a palindrome"

// Challenge: odd number of letters vs even number of letters.

const palindrome = function (word) {
    word.split()
}


