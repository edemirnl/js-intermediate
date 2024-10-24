//1. Addition

//Add all the values between 200 and 2700 (inclusively) 
//that are divisible by 3 or 5, but not both 3 and 5. 
//To solve this task you might want to use the modulus operator.

//pseudo code:
//define a sum variable
//for loop start from 200 until 2700
//divide by 3 or 5 but not at the same time
//if true add 
//print the result

let sum=0
for (let i=200; i<=2700; i++){
    if ((i%3==0 || i%5==0) && !(i%3==0 && i%5==0)){
        sum+=i
    }
}
console.log(sum)


//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that 
//shifts each number by one to the front. When your program is done the 
//output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

//pseudo code:
//define an empty x array
//for loop iterate to the array
//formula shifts numbers by one
//print the result

//solution:1
let newArray=[]
let x=[2,1,6,4,-7]
for(let i=0; i<x.length; i++){
    newArray.unshift(x[i])
}
console.log(newArray)

//solution:2
for (let i=0; i<(x.length-1)/2; i++){
    let temp
    temp=x[i]
    x[i]=x[x.length-1-i]
    x[x.length-1-i]=temp
}
console.log(x)
