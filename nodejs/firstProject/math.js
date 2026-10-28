function addition(n1,n2){
    return n1+n2
}

function subtraction(n1,n2){
    return n1-n2
}

function multiplication(n1,n2){
    return n1*n2
}

function division(n1,n2){
    if(n2==0){
        return "Can not divide by ZERO"
    }
    return n1/n2
}

module.exports = {addition, subtraction, multiplication, division}