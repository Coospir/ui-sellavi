import dataObject from "../utils/dataObject.js"
window.onload = () => {
    fetch(dataObject.getOrdersLink, {
    }).then(response => response.json())
        .then((data) => {
            (data.response).forEach(item => {
                fetch(dataObject.getOrderDataByID + `?id=${item.order_id}`, {
                }).then(response => response.json())
                    .then((data) => {
                        console.log(data.response)
                        document.querySelectorAll(".cards").forEach(item => {
                            item.insertAdjacentHTML("afterbegin", `
                            <div class="card_item">
                                <p><span>Order №${data.response.order_id}</span></p>
                                <span>Buyer: ${data.response.payment_lastname} ${data.response.payment_firstname}</span>
                            </div>
                        `)
                        })
                    })
            })
        })
    .catch(error => console.error(error))
}

