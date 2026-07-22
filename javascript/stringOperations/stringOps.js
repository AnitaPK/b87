// 1. Convert given string to capitalize. 
strPara = "Small efforts today lead to big achievements tomorrow" 

function convertToUpperCase(str){
    return str.toUpperCase()
}
strUpperCase = convertToUpperCase(strPara)

console.log(strUpperCase)

// 2. Convert to lower case
function convertToLowerCase(str){
    return str.toLowerCase()
}
strLowerCase = convertToLowerCase(strPara)
console.log(strLowerCase)

// 3. Extract the first word of a sentence.
const extractFirstWord = (str) =>{
    return str.charAt(0)
}

firstLetter = extractFirstWord(strPara)
console.log(firstLetter)

// 4. Split a string into an array of words.

const convertArrayWords = (str) =>{
    return str.split(" ")
}
arrayOfWords = convertArrayWords(strPara)

console.log(arrayOfWords)

// 5. Replace all spaces in a string with hyphens (-).

function SpaceWithHyphen(str){
    arrayWords = str.split(" ")
    strWithHyphens = arrayWords.join("-")
    return strWithHyphens
}
strHyphens = SpaceWithHyphen(strPara)
console.log(strHyphens)

// do this using replaceAll( , '-')

// 6. Convert the first letter of each word in a string to uppercase.

function firstLetterUpperCase(str){
    // will complete this after study array
}
// 7. Check if a string starts and ends with the same character.
    function matchFirstAndLast(str){
        firstChar = str.charAt(0)
        lastChar = str.charAt(str.length - 1)
        if(firstChar == lastChar){
            return 'a string starts and ends with the same character'
        }else{
            return 'a string starts and ends with the different character'
        }
    }
matchSTR = matchFirstAndLast(strPara)
console.log(matchSTR)

// 8. Reverse the characters in a string manually (without built-in functions).
function reverseString(str){
    reverseSTR = ''
    for(let i=str.length-1; i>0; i--){
        reverseSTR = reverseSTR + str[i]
    }
    return reverseSTR
}
reverseOutput = reverseString(strPara)
console.log(reverseOutput)
// 9. Check if a string is a palindrome.

// 10. Count the number of occurrences of a specific character in a string.
// 11. Write a program to count the number of vowels in a given string.
// 12. Remove all non-alphanumeric characters from a string.

