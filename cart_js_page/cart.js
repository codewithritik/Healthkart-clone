let arr = [];
let data = JSON.parse(localStorage.getItem("productdata"))
arr.push(data)
    //console.log(arr)
display(arr)


function display(arr) {
    console.log(arr)
    let cartitem = document.querySelector("#Item")
        //cartitem.innerHTML = []
    arr.forEach(el => {
        let div = document.createElement("div")
        let div1 = document.createElement("div")
        let image = document.createElement("img")
        image.src = el.image;
        let title = document.createElement("h4")
        title.innerText = el.title
        let price = document.createElement("p")
        price.innerText = `Price: ${el.price}`;
        div.append(image);
        div1.append(title, price);
        cartitem.append(div, div1);
    });
}

function paymentfun() {
    window.location.href = "./payment.html"
}