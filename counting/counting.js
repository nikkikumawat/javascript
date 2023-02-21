//  function num(a,b,c,d,e){
//     let add=a.concat('',b+'',c+'',d+'',e+''+'<br>')
//     document.write(add)
// }
// num('5','4','3','2','1')
//add numebrs in concat


// function name(a,b){
//     // let add=a.concat('',b+''+"<br>")


//     let add=a+" "+b+'<br>'
//     document.write(add)
// }
// name('jitu','kumar')
// name('nikki','kumawat')
// name('mahi','kumar')
// name('sachin','kumar')


let latter = 'MISSISSIPPI'
let freq = {}
let latterarray = latter.split("")
for (let i = 0; i < latterarray.length; i++) {
    if (Object.keys(freq).includes(latterarray[i]))
        freq[latterarray[i]] = freq[latterarray[i]] + 1
    else {
        freq[latterarray[i]] = 1
    }
}
console.log(freq)


