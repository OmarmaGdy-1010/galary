let images = document.querySelectorAll('.container > div');

let imagesarr = Array.from(images) 
console.log(imagesarr);


imagesarr.forEach(image => {
    image.addEventListener('click', (e) => {
        rest()
        e.target.classList.toggle('active');
        
    });
});


rest()

function rest() {
    for (let i = 0; i < imagesarr.length; i++){
        imagesarr[i].classList.remove('active')
}
}