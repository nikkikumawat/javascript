let anchor = document.querySelectorAll("a")
let div = document.querySelectorAll(".con")

for (let i = 0; i < anchor.length; i++) {
    anchor[i].onclick = function (e) {
        e.preventDefault()
        document.querySelector("a.active").classList.remove("active")
        anchor[i].classList.add("active")
        document.querySelector(".con.active").classList.remove("active")
        div[i].classList.add("active")
    }
}