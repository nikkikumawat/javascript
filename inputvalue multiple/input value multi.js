let btn = document.querySelector('button') 
// btn.onclick = function () {             
//     console.log(btn.innerHTML)          
// }
                                          
let input1 = document.querySelector('.first')
let input2 = document.querySelector('.second')
btn.onclick = () => {
    let total = input1.value * input2.value;
    console.log(total)
}
