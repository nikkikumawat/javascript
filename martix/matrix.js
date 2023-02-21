let matri=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let output=[]
let b=0;
for(let i=0;i<matri.length;i++){
for(let j=matri.length-1;j>=0;j--){
    b=matri[j][i]
    output.push(b)
}
}
console.log(output.splice(0,matri.length))
console.log(output.splice(0,matri.length))
console.log(output.splice(0,matri.length))



// let input=[
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
// ]
// function rotatematrix(input) {
//     let output = []
//     for (let i = 0; i < input.length; i++) {       //row
//         let temp = []
//         for (let j = input.length - 1; j >= 0; j--) {    //coulmn
//             temp.push(input[j][i])
//         }
//         output.push(temp)
//     }
//     return output
// }

// console.log(rotatematrix(input))