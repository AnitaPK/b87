 n = 5 

 function squarePattern(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j = 1; j<= n; j++){
            line = line + " *"
        }
       console.log(line) 
    }
 }
 squarePattern(n)

//  ite number     i.  line in i ite     j.         line.                result
//  1              1       line = ''     1         line  = ''+"*".         '*'
//                                       2.        line = "*" +"*"         '**'
//                                       3.        line = "**" +"*"        '***'
//                                       4         line = "***" + "*"      '****'
//                                       5         line = "****"+"*"       '*****'
//                                       6 
//                 2        ''           1         line  = ''+"*".         '*'
//                                       2.        line = "*" +"*"         '**'
//                                       3.        line = "**" +"*"        '***'
//                                       4         line = "***" + "*"      '****'
//                                       5         line = "****"+"*"       '*****'
//                                       6 
//                 3       ''           1         line  = ''+"*".         '*'
//                                       2.        line = "*" +"*"         '**'
//                                       3.        line = "**" +"*"        '***'
//                                       4         line = "***" + "*"      '****'
//                                       5         line = "****"+"*"       '*****'
//                                       6 

function printRightAngleTriangle(n){
    for( let i = 1; i<=n; i++){
        line = ''
        for(let j = 1; j<=i; j++){
            line += " *"
        }
        console.log(line)
    }
}
printRightAngleTriangle(n)

function printInvertedTriangle(n){
    for( let i = 1; i<=n; i++){
        line = ''
        for(let j = n; j>= i; j--){
            line += " *"
        }
        console.log(line)
    }
}
printInvertedTriangle(n)
//  ite number     i.  line in i ite     j.         line.                result
//  1              1       line = ''     5         line  = ''+"*".         '*'
//                                       4.        line = "*" +"*"         '**'
                    //                     3 2 1 
                    // 2.      line = ''   5       " *"
                    //                     4, 3, 2, 

// if(dis>10){
//     totalPrice = amount + 1000
// }else{
//     totalPrice = amount + 100
// }

// totalPrice = dis>10 ? amount + 1000 : amount + 100


function printPyramid(n){
    for( let i = 1; i<=n; i++){
        line = ''
        for(let j = 1; j<=n-i; j++){
            line += ' '
        }
        for(let k = 1; k<= 2*i-i; k++){
            line += "* "
        }
        console.log(line)
    }
}
printPyramid(n)
