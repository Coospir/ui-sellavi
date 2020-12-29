let getIDs = (orderID, element) => {
    console.log(orderID, element.selectedIndex)
    //let e = document.getElementById("statuses")
    /*let statusID = e.options[e.selectedIndex].value
    updateOrderStatus(orderID, statusID)*/
}

let updateOrderStatus = (statusID, orderID) => {
    console.log(statusID, orderID)
    statusID = null
    orderID = null
    //fetch('https://ru.sellavi.com/gateway/order/' + orderID + '/update_status', {}).then(response => response.json())
}



