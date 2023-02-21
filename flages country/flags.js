
let right=document.querySelector(".right")
let input=document.querySelector(".left input")
let image=document.querySelector(".right img")
let btn=document.querySelector("button")
let wra = document.querySelector("#wrapper")

function flag() {
    fetch("https://flagcdn.com/en/codes.json")
        .then((response) => {
            return response.json()
        })
        .then((resolve) => {
            showflag(resolve,input.value)
        })
}

btn.onclick=()=>{
    document.querySelector(".right").style.display="flex"
    flag()
    
}

function showflag(data,fname) {

    fname = fname.toLowerCase()
    let firstword= fname[0].toUpperCase()
    let splt = fname.split("")
    splt.splice(0,1,firstword)
    let flagtofind = splt.join("")

    for(let i in data){ 
        if (data[i]=== flagtofind ) {
            image.src = "https://flagcdn.com/160x120/"+ [i]  + ".png"
        }
    }
}
