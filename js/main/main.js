import dataObject from "../utils/dataObject.js"
window.onload = () => {
    let orders = {}
    fetch(dataObject.getOrdersLink, {
    }).then(response => response.json())
        .then((data) => {
            (data.response).forEach((item, index) => {
                fetch(dataObject.getOrderDataByID + `?id=${item.order_id}`, {
                }).then(response => response.json())
                    .then((data) => {
                        if(item.order_id === data.response.order_id) {

                            orders = {
                                "id": data.response.order_id,
                                "lastname": data.response.lastname,
                                "firstname": data.response.firstname,
                                "products": data.response.products,
                                "cost": data.response.total
                            }

                            document.querySelectorAll(".cards").forEach((item, index) => {
                                item.insertAdjacentHTML("afterbegin", `
                                <div class="card_item">
                                    <h3 class="title">Order №${orders.id}</h3>
                                    <div class="buyer">Buyer: ${orders.lastname} ${orders.firstname}</div>
                                    <div id=${orders.id} class="products">${orders.products}</div>
                                    <div class="price">Price: ${orders.cost} rub.</div>
                                </div>
                            `)
                            })
                            console.log(Array.from(orders.products))
                        }

                    })
            })
        })
    .catch(error => console.error(error))
}

