let btn=document.querySelector("button")
let input=document.querySelectorAll("input")
let para=document.querySelector("p")

btn.onclick=function(){
    para.innerHTML=input[0].value+' '+input[1].value
    let vowels=['a','e','i','o','u']
    let count=0;
    let spl=input[0].value.split(' ')
    for(i=0;i<spl.length; i++){
    if(!vowels.includes(spl[i])){
      count++
    }
    para.innerHTML=para.innerHTML+count;
}
let sp=input[0].value.split(' ')
for(i=0;i<sp.length; i++){
    if(!vowels.includes(sp[i])){
      count++
    }
}    
para.innerHTML=para.innerHTML+count;   
}


 
 
// function conso(cons) {          
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let output = ''
//     for (let i = 0; i < cons.length; i++){
//         if (vowels.includes(cons[i])) {
//             continue
//         }
//         else {
//             output += cons[i]
//         }
//     }
//     document.write(output)
//     document.write('<br>')
// }
// conso('nikky')
// conso('jitu')
// conso('mahi')


// function conso(cons) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let output = ''
//     for (let i = 0; i < cons.length; i++){
//         if (vowels.includes(cons[i])) {
//             continue
//         }
//         else {
//             output += cons[i]
//         }
//     }
//     document.write(output)
//     document.write('<br>')
// }
// let btn= document.querySelector("button")
// let input=document.querySelector("input")

// btn.onclick=()=>{
//     conso(input.value)
// }



// conso('nikky')
// conso('jitu')
// conso('mahi')



// let numbers = [34, 3, 1, 55, 23, 56, 35, 9, 99, 100, -101, -10, -11, 2]
// let largest = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < largest) {
//         largest = numbers[i]
//     }
// }
// document.write(largest)


// let numbers = [34, 3, 1, 55, 23, 56, 35, 9, 99, 100, -101, -10, -11, 2]
// for (i = 0; i < numbers.length; i++) {
//     for (let j = i; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             let temp = numbers[i]
//             numbers[i] = numbers[j]
//             numbers[j] = temp
//         }
//     }
//     document.write(numbers[i])
//     document.write('<br>')
//   //smallest to largest
// }
// let numbers = [34, 3, 1, 55, 23, 56, 35, 9, 99, 100, -101, -10, -11, 2]
// for (i = 0; i < numbers.length; i++) {
//     for (let j = i; j < numbers.length; j++) {
//         if (numbers[i] < numbers[j]) {
//             let temp = numbers[i]
//             numbers[i] = numbers[j]
//             numbers[j] = temp
//         }
//     }
//     document.write(numbers[i])
//     document.write('<br>')
//   //largest to smallest
// }

