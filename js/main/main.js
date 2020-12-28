import dataObject from "../utils/dataObject.js"
import getGoodsCategory from "./getGoodsCategory.js"

window.onload = () => {
    getGoodsCategory('200', '1')
    let orders = {}
    let countOrder = 0
    fetch(dataObject.getOrdersLink, {
    }).then(response => response.json())
        .then((data) => {
            (data.response).forEach((item, index) => {
                countOrder++
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
                            let productsHTML = ``
                            for (const [key, value] of Object.entries(orders.products)) {

                                productsHTML += `<p>- ${value.name}</p>`;
                            }
                            document.querySelectorAll(".cards").forEach((item, index) => {
                                item.insertAdjacentHTML("beforeend", `
                                <tr>
                                    <td>${orders.id}</td>
                                    <td>${orders.lastname} ${orders.firstname}</td>
                                    <td>${productsHTML}</td>
                                    <td>${orders.cost} rub.</td>
                                    <td>
                                        <div class="edit_block">
                                            <h5>Edit order</h5>
                                            <div class="btn_group">
                                                <select name="statuses" id="statuses">
                                                    <option value="sended">Sended</option>
                                                    <option value="cancel">Cancel</option>
                                                    <option value="approved">Approved</option>
                                                </select>
                                                <button class="accept_btn">Accept status</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `)
                            })
                        }
                    })
            })
            document.querySelector(".count-orders").insertAdjacentHTML("afterbegin", "Count orders for now: " + countOrder)
        })
    .catch(error => console.error(error))
}

/*
<div class="card_item">
    <h3 class="title">Order №${orders.id}</h3>

    <div class="info_block">
        <p class="buyer">Buyer: ${orders.lastname} ${orders.firstname}</p>
        <p id=${orders.id} class="products">Products: ${productsHTML}</p>
        <p class="price">Total price: ${orders.cost} rub.</p>
    </div>
</div>*/
