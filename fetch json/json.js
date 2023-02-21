fetch('https://dummyjson.com/products')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        showdata(result.products)
        console.log(result.products)
    })


// async function fetchdata(){
//          const response = await fetch('https://dummyjson.com/products')
//          const  resolve = await response.json()
//          showdata(resolve.products)
//     }

//     fetchdata()

function showdata(data) {
    for (let i = 0; i < data.length; i++) {

        let product = document.createElement("div")
        product.setAttribute("class", 'box')
        document.querySelector("#wrapper").append(product)

        const image = document.createElement("img")
        image.src = data[i].images[0]
        product.insertAdjacentElement('beforeend', image)

        const brand = document.createElement("h3")
        brand.innerHTML = data[i].brand
        product.insertAdjacentElement('beforeend', brand)


        const title = document.createElement("h2")
        title.innerHTML = data[i].title
        product.insertAdjacentElement('beforeend', title)

        const description = document.createElement("p")
        description.innerHTML = data[i].description
        product.insertAdjacentElement('beforeend', description)


        const price = document.createElement("h1")
        price.innerHTML = "Price: " + data[i].price
        product.insertAdjacentElement('beforeend', price)

        const discount = document.createElement("h5")
        discount.innerHTML = "Discount:" + data[i].discountPercentage
        product.insertAdjacentElement('beforeend', discount)


        const rating = document.createElement("h4")
        rating.innerHTML = "rating: " + data[i].rating
        product.insertAdjacentElement('beforeend', rating)


        const stock = document.createElement("h4")
        stock.innerHTML = "Remaining stock: " + data[i].stock
        product.insertAdjacentElement('beforeend', stock)
    }
}