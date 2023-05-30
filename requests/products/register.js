const url = requestURL + '/users/register'

function addProduct(event){
    event.preventDefault()
    let form = new FormData(event.target);
    let obj = {};
    form.forEach((value, key) => obj[key] = value);
    obj['bio']=''
    console.log(obj)
    postRequest(url, obj)
    //event.target.reset(); // очищаем форму
}
document.addEventListener("DOMContentLoaded", function(){
    if(document.querySelector(".registration_form")!=null){
        document.querySelector(".registration_form").addEventListener('submit', ()=>{addProduct(event)} )}
    getProductsOnPage()
})