const url = requestURL + '/items'

function getAllProducts(){
    return getRequest(url)
}

function getProductsByCategory(category){
    return getRequest(url + category)
}

function postProduct(product){
    return postRequest(url, product)
}

function addProduct(event){
    event.preventDefault()
    let form = new FormData(event.target);
    let obj = {};
    form.forEach((value, key) => obj[key] = value);
    console.log(obj)
    console.log(url)
    postProduct(url,obj)
    //event.target.reset(); // очищаем форму
}
document.addEventListener("DOMContentLoaded", function(){
    if(document.querySelector(".product_form_form")!=null){
 document.querySelector(".product_form_form").addEventListener('submit', ()=>{addProduct(event)} )}
 getProductsOnPage()
})


function getProductsOnPage(category){
    if(document.querySelector('.products-container')!=null) {
        console.log(getAllProducts())
        getAllProducts().forEach(item)
        {
            itemHTML = document.createElement('div')
            itemHTML.class = "product_item"
            itemHTML.innerHTML = "                        <div class=\"product-item\">\n" +
                "                            <div class=\"product-background\">\n" +
                "                                <button class=\"add-to-cart\"><img class=\"add-to-cart-icon\" src=\"./catalog/img/cart.svg\" ></button>\n" +
                "                                <img src=\"./catalog/img/baikal.png\">\n" +
                "                            </div>\n" +
                "                            <div class=\"product-text\">\n" +
                "                                <a href=\"./product.html\" class=\"product-name\">\n" +
                "                                    ${item.name}   </a>\n" +
                "                                <div class=\"product-price\">\n" +
                "                                    <span class=\"price\">${item.price}</span><span> руб</span>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                        </div>"
        }
        item = document.createElement()
    }

}