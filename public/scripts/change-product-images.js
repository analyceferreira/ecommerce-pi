const images = document.querySelectorAll('.secondary-images-min')
const imagemGrande = document.querySelector('#principal-image')

let imageTag = ""
for (const img of images) {
    img.addEventListener('click', event => {
        imageTag = event.target.src
        imagemGrande.src = imageTag 
    }
)}