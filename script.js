fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {

        let allCards = ""

        for (let i = 0; i < 30; i++) {
            allCards += `
        <div class="cards">
            <div class="cardimg">
                <img src="${data[i].images[0]}" alt="">
            </div>
            <h6>${data[i].title}</h6>
            <p>$${data[i].price}</p>
        </div>
        `
        }

        document.getElementById("cardwrapper").innerHTML = allCards
    })
    .catch((err) => {
        console.log("Err", err)
    })