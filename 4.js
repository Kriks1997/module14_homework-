const makeRequest= document.querySelector('.button')
const outputRequest= document.querySelector('.output')

function sendRequest() {
    const limitInputWidth = document.querySelector('.width').value
    const limitInputHeight = document.querySelector('.height').value
    if (isNaN(limitInputWidth) ||
        isNaN(limitInputHeight) ||
        limitInputWidth < 100 ||
        limitInputWidth > 300 ||
        limitInputHeight < 100 ||
        limitInputHeight > 300) {
        outputRequest.textContent = 'Одно из чисел вне диапазона от 100 до 300'
    } else {
        outputRequest.textContent = ' '
        const imageUrl = `https://dummyimage.com/${limitInputHeight}x${limitInputWidth}/`
        fetch(imageUrl)
        .then((response) => {
            if (response.ok) {
                const img = document.createElement('img')
                img.src = imageUrl
                outputRequest.appendChild(img)
            }
        })
        .catch((result => {
            outputRequest.textContent = 'Ошибка при загрузке изображения'
        }))
    }
}

makeRequest.addEventListener('click', sendRequest)