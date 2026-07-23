const inputElement = document.getElementById("inputPara")
const resultElement = document.getElementById("result")


function convertToUpperCase(){
    const inputValue = inputElement.value 
    outputText = inputValue.toUpperCase()
    resultElement.textContent = outputText
}

function CheckPalindrom(){
    const inputValue = inputElement.value 

    reverseSTR = ''
    for(let i=inputValue.length-1; i>=0; i--){
        reverseSTR = reverseSTR + inputValue[i]
    }
    console.log(reverseSTR)
    if(inputValue == reverseSTR){
        console.log("*******")
        outputText = "It is PALINDROM"
    }else{
        outputText = "It Not PALINDROM"
    }
    resultElement.textContent = outputText
}

function countVowels(){
    const inputValue = inputElement.value 
    count = 0

    vowels = 'aeiouAEIOU'

//    'Hello World'
//    count = 3

    len = inputValue.length

    for(i=0; i<len; i++){
        inputValue[i] // inputValue.charAt(i)

       if(vowels.includes(inputValue[i])){
        count++
       } 
    }

    resultElement.textContent = "Vowels count : "+ count
}

function countConsonents(){
    
}