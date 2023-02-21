let para = document.querySelector("p")
let wrapper = document.querySelector("#wrapper")
let coutdown = new Date("March 8, 2023  12:00:00").getTime()
let stop = setInterval(() => {
    let now = new Date().getTime()
    let remainning = coutdown - now
    let days = Math.floor(remainning / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainning % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainning % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainning % (1000 * 60)) / 1000);
    para.innerHTML = days + "days " + hours + "hours "
        + minutes + "minutes " + "and " + seconds + "seconds ";


    if (remainning <= 0) {
        clearInterval(stop)
        wrapper.style.display="None"
        document.querySelector(".holi").style.display="flex"
    }
},1000)