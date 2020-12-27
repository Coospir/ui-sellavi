
import dataObject from "../utils/dataObject.js"


window.onload = () => {
    fetch(dataObject.getOrdersLink, {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    }).then(response => response.json())
        .then((data) => {
            (data.response).forEach(item => {
                document.querySelector(".cards").insertAdjacentHTML("afterbegin", `
                <div id="${item.order_id}" class="card_item">
                    <div>Order №<span class="id">${item.order_id}</span></div> 
                    <hr>
                    <p><b>Buyer:</b> ${item.name}</p>
                    <p><b>Cost:</b> ${item.total} ${item.currency_code}</p>
                    <p><b>Count:</b> ${item.products}</p>
                    <p><b>Description: </b><span class="description"></span></p>
                </div>
                `)
            })
        })
    .catch(error => console.error(error))

    setTimeout(() => {
        let cardItems = document.querySelectorAll(".card_item")

        cardItems.forEach(cardItem => {
            //console.log(dataObject.getOrderDataByID + '?id=' + item.querySelector(".id").textContent)
            fetch(dataObject.getOrderDataByID + '?id=' + cardItem.querySelector(".id").textContent, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            }).then(response => response.json())
                .then((data) => {
                    if((cardItem.querySelector(".id").textContent) === data.response.order_id) {
                        console.log(cardItem.querySelector(".id").textContent, data.response.order_id)
                        //console.log(data.response.products[0].name)
                        document.querySelectorAll(".description").forEach((descriptionItem, i) => {
                            descriptionItem.insertAdjacentHTML("afterbegin", `<p class="items">${data.response.products[i]}</p>`)
                        })
                    }
                })
                .catch(error => console.error(error))
        })
    }, 2000)

    /*let orderID = document.querySelectorAll
    fetch(dataObject.getOrderDataByID + , {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    }).then(response => response.json())
        .then((data) => {
            (data.response).forEach(item => {
                document.querySelector(".cards").insertAdjacentHTML("afterbegin", `
                <div class="card_item">
                    <h3>Order: № ${item.order_id}</h3>
                    <hr>
                    <p><b>Buyer:</b> ${item.name}</p>
                    <p><b>Cost:</b> ${item.total} ${item.currency_code}</p>
                    <p><b>Count:</b> ${item.products}</p>
                    <p><b>Description: </b><span class="description"></span></p>
                </div>
                `)
            })
        })
        .catch(error => console.error(error))*/
}

