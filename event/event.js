let btn = document.querySelectorAll("button");
let para = document.querySelector("p")
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault()
        // if (para.innerHTML === ' ') {
        //     para.innerHTML = btn[i].innerHTML
        // }
        // else {
        //     para.innerHTML = " "
        // }
        para.innerHTML = (para.innerHTML === ' ') ? btn[i].innerHTML : " "
        para.onclick=function(){
            para.innerHTML=" "
        }

        // if (i % 2 === 0) {
        //     para.innerHTML = "Even Number"
        //     console.log("Even")
        // }
        // else {
        //     para.innerHTML = " "
        //     console.log("odd")
        // }
    }
}
// para.onclick =function(){
//     para.innerHTML = " "
// }