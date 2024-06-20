const limitInput = document.getElementById('input')
const makeRequest= document.getElementById('button')
const outputRequest= document.querySelector('.output')

function paintPhotos(photos){
    photos.forEach(elem => {
        // outputRequest.innerHTML += `<img class = '' src='${elem.url}'/>`
        const icon = document.createElement('img')
        icon.src = elem.url
        outputRequest.appendChild(icon)
    })
}

function getPhotos(){
    const limit = limitInput.value 
    if (limit < 1 || limit > 10) {
        alert('Число вне диапозона от 1 до 10')
    } else {
        outputRequest.innerHTML = ''
        let xhr = new XMLHttpRequest()
        xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.response)
                console.log(data)
                paintPhotos(data)
            } else {
                alert('Произошла ошибка при загрузке')
            }
        }
        xhr.onerror = function() {
            alert('Произошла ошибка при загрузке')
        }
        xhr.send()
    }
}

makeRequest.addEventListener('click', getPhotos)