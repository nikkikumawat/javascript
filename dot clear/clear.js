let canvas = document.querySelector(".canvas")
        let span = document.querySelector(".heading span")
        let btn = document.querySelector(".heading button")
        canvas.onmousemove = function (e) {
            let x = e.offsetX;
            let y = e.offsetY;
            // console.log(x)
            span.innerHTML = x + "," + y;
        }
        canvas.onclick = function (e) {
            let div = document.createElement("div")
            div.classList.add("dot")
            // console.log(div)
            div.style.left = e.offsetX-Number(5)+ "px"
            div.style.top = e.offsetY-Number(5)+ "px"
            canvas.append(div)
        }
        btn.onclick = function () {
            span.innerHTML = " "
            canvas.innerHTML= " "
        }