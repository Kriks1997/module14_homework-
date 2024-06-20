const makeRequest= document.querySelector('.button')
const outputRequest= document.querySelector('.output')
const pageLocalStorage = localStorage.getItem('page')
const limitLocalStorage = localStorage.getItem('limit')
if (pageLocalStorage && limitLocalStorage) {
    fetchImages(pageLocalStorage, limitLocalStorage)
}

function fetchImages(pageNumber, limit) {
    fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&limit=${limit}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        outputRequest.innerHTML = data.map(photo => {
            return `
            <div>
                <img src="${photo.url}">
                <p>${photo.title}</p>
            </div>
            `
        }).join('');
    })
    .catch((result => {
        outputRequest.textContent = 'Ошибка при загрузке изображения'
    }))
}
function result() {
    const pageNumber = document.querySelector('.number').value
    const limit = document.querySelector('.limit').value
    const isPageNumberValid = pageNumber >= 1 && pageNumber <= 10
    const isLimitValid = limit >= 1 && limit <= 10
    if (!isPageNumberValid && !isLimitValid) {
        outputRequest.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
    } else if (!isPageNumberValid) {
        outputRequest.textContent = 'Номер страницы вне диапазона от 1 до 10'
    } else if (!isLimitValid) {
        outputRequest.textContent = 'Лимит вне диапазона от 1 до 10'
    } else {
        outputRequest.textContent = ''
        fetchImages(pageNumber, limit)
        localStorage.setItem('page', pageNumber)
        localStorage.setItem('limit', limit)
    }
}

makeRequest.addEventListener('click', result)