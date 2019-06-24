// document.getElementById('image').addEventListener('click', changeImage);
let imageArray = ['url(./images/hero-image-0.jpg)', 'url(./images/hero-image-1.jpg)', 'url(./images/hero-image-2.jpg)', 'url(./images/hero-image-3.jpg)'];
let position = 0;
let time = 0;

function changeImage () {
    // let image = document.getElementById('image');

    if (position === 0) {
        document.querySelector('#image').style.backgroundImage = imageArray[0];
    } else if (position === 1) {
        document.querySelector('#image').style.backgroundImage = imageArray[1];
    } else if (position === 2) {
        document.querySelector('#image').style.backgroundImage = imageArray[2];
    } else if (position === 3) {
        document.querySelector('#image').style.backgroundImage = imageArray[3];
    }

}

toTheLeft = (event) => {
    event.preventDefault();

    if (position > 0) {
        position--;
    } else {
        position = imageArray.length - 1;
    }

    changeImage();

}

toTheRight = (event) => {
    event.preventDefault();

    if (position < imageArray.length - 1) {
        position++;
    } else {
        position = 0;
    }
    changeImage();

}

document.getElementById('left-btn').addEventListener('click', toTheLeft);
document.getElementById('right-btn').addEventListener('click', toTheRight);

setInterval(incrementImage, 3000);

function incrementImage () {
    position++;
    if (position < imageArray.length - 1) {
        position++;
    } else {
        position = 0;
    }
    changeImage();
}