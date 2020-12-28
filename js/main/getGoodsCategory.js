import dataObject from "../utils/dataObject.js";

function getGoodsCategory(categoryID, limit, page) {
    fetch(dataObject.getGoodsCategory + `?limit=${limit}&page=${page}`, {
    }).then(response => response.json()).then((data) => {
        console.log(data)
    }).catch(error => console.error(error))
}

export default getGoodsCategory