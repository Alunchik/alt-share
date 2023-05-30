const requestURL = "http://localhost:8888" //url бэка

function getRequest(url, data, params){ // общая функция GET запроса
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa('john:secret'))
    for (var key in params){
        xhr.setRequestHeader(key, params[kay])
    }
    xhr.onload = function (){
        console.log(xhr.status)
        if(xhr.status==400){
            data = JSON.parse(xhr.response)
        }
    }
    xhr.send()
    return data
}

function postRequest(url ,data, params){ // общая функция POST запроса
    const xhr = new XMLHttpRequest()
    xhr.open('POST',  url)
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

    for (var key in params){
        xhr.setRequestHeader(key, params[kay])
    }
    xhr.onload = function (){
        console.log(xhr.status)
        if(xhr.status==400){
            data = JSON.parse(xhr.response)
        }
    }
    xhr.send()
    return data
}

function deleteRequest(url, data, params){ // общая функция DELETE запроса
    const xhr = new XMLHttpRequest()
    xhr.open('DELETE', url)
    for (var key in params){
        xhr.setRequestHeader(key, params[kay])
    }
    xhr.onload = function (){
        console.log(xhr.status)
        if(xhr.status==400){
            data = JSON.parse(xhr.response)
        }
    }
    xhr.send()
    return data
}

