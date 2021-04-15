const btn = document.querySelector('button');
const myDiv = document.getElementById('display');

const getData = () =>{
    myDiv.textContent = null;
    const image = document.createElement('img');
    myDiv.appendChild(image)

    const endpoint = 'https://api.giphy.com/v1/gifs/translate?api_key=pdZy18rAmnVu4ArJQKbssDTDoSO7AT6K&s=cat';
    fetch( endpoint, {mode: 'cors'})
    .then(response =>{
        return response.json()
    })
    .then(cats =>{
        image.src= cats.data.images.original.url
    })
}

btn.addEventListener('click', getData);