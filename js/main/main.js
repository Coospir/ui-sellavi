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
                        let response = data.response
                        if(item.order_id === response.order_id) {
                            orders = {
                                "id": response.order_id,
                                "lastname": response.lastname,
                                "firstname": response.firstname,
                                "products": response.products,
                                "cost": response.total
                            }

                            console.log(index)
                            //console.log(orders)
                            let productsHTML = ``
                            for (const [key, value] of Object.entries(orders.products)) {

                                productsHTML += `<p>- ${value.name}</p>`;
                            }
                            document.querySelectorAll(".cards").forEach((item, index) => {
                                item.insertAdjacentHTML("afterbegin", `
                                <div class="card_item">
                                    <h3 class="title">Order №${orders.id}</h3>
                                    <div class="buyer"><p>Buyer: ${orders.lastname} ${orders.firstname}</p></div>
                                    <div id=${orders.id} class="products"><p>Products: ${productsHTML}</p></div>
                                    <div class="price"><p>Total price: ${orders.cost} rub.</p></div>
                                </div>
                            `)
                            })
                            //document.querySelector(".count-orders").insertAdjacentHTML("afterbegin", Object.keys(orders).length)
                        }

                    })
            })

        })
    .catch(error => console.error(error))
}

