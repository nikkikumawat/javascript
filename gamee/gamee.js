let btn = document.querySelector(".first button")
let image = document.querySelectorAll("img")
let timer = document.querySelector(".time h1 span")
let score = document.querySelector(".score h1 span  ")
let btn2 = document.querySelector(".limit button")
let input = document.querySelector("input")
let blank = document.querySelector(".blank")
let four = document.querySelector(".four")
let btn3 = document.querySelector(".four button")
let head = document.querySelector(".four h2")

btn.onclick = () => {
    document.querySelector(".first").style.display = "none"
    document.querySelector(".second").style.display = "flex"
}


for (let i = 0; i < image.length; i++) {
    image[i].onclick = () => {
        document.querySelector(".limit").style.display = "flex"
        document.querySelector(".second").style.display = "none"
    }
}


function Timer(a) {
    let stop = setInterval(() => {
        if (Number(timer.innerHTML) < a) {
            timer.innerHTML = Number(timer.innerHTML) + 1
        }
        else {
            clearInterval(stop)
        }
    }, 1000)
}

btn2.onclick = () => {
    document.querySelector(".limit").style.display = "none"
    document.querySelector(".third").style.display = "block"
    Timer(input.value)
    showimage(input.value)
}
function hideimage(tap) {
    tap.remove()
    score.innerHTML = Number(score.innerHTML) + 1
}

function showimage(b) {
    let stop = setInterval(() => {
        if (Number(timer.innerHTML) < b) {
            let player = document.createElement("img")
            player.src = "images/bcf0272b061414169e8d2e21659223c7-removebg-preview.png"
            blank.insertAdjacentElement("beforeend", player)
            let x = blank.clientHeight
            let y = blank.clientWidth
            let ran = Math.floor(Math.random() * (x - 70))
            let run = Math.floor(Math.random() * (y - 80))
            player.style.left = run + 'px'
            player.style.top = ran + 'px'
            player.setAttribute("onclick", "hideimage(this)")
        }
        else {
            document.querySelector(".third").style.display = "none"
            four.style.display = "flex"
            head.append(score.innerHTML)
            clearInterval(stop)
        }
    }, 400)

}

