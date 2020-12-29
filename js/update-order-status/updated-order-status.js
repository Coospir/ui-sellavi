
let getIDs = (orderID) => {
    let newStatusID = document.querySelector(`.search${orderID}`).value

    updateOrderStatus(orderID, newStatusID)
    //let e = document.getElementById("statuses")
    /*let statusID = e.options[e.selectedIndex].value
    updateOrderStatus(orderID, statusID)*/
}

let updateOrderStatus = (orderID, newStatusID) => {
    console.log(orderID, newStatusID)
    newStatusID = null
    orderID = null
    fetch('https://ru.sellavi.com/gateway/order/' + orderID + '/update_status', {}).then(response => response.json())
}



