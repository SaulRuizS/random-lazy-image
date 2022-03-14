import { registerImg } from './lazy'

const unsplashRandom = 'https://source.unsplash.com/random';

const mainContainer = document.getElementById('main-container');

const imagesContainer = document.createElement('div');
imagesContainer.className = 'images-container';

const addImgButton = document.createElement('button');
addImgButton.className = 'rounded-md bg-red-400 p-4 w-full mt-6 mb-4 text-base text-white';
addImgButton.textContent = 'New Image';

const clearButton = document.createElement('button');
clearButton.className = 'rounded-md bg-red-300 py-2 w-full mt-1 mb-4 text-base text-white';
clearButton.textContent = 'Clear';

mainContainer.append(addImgButton, clearButton, imagesContainer);

let addedImages = 0;

const clearImages = () => {
    imagesContainer.querySelectorAll('.img-container').forEach((imgElement) => {
        imgElement.remove();
    })
    addedImages = 0;
}

clearButton.onclick = clearImages;

async function imageRequest(imgContainer, loadingCover) {

    const unsplashResponse = await fetch(unsplashRandom);

    const newRndmImg = unsplashResponse.url;

    setTimeout(() => {
        loadingCover.remove();
    }, 800);

    const randomImg = document.createElement('img');
    randomImg.className = 'h-60 w-4/5 rounded-lg object-cover';
    randomImg.dataset.src = newRndmImg; //dataset allows you to make your own html attributes

    imgContainer.append(randomImg);

    registerImg(imgContainer);

    console.log(`Total added images: ${++addedImages}`);
}

function addNewImage() {

    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container px-2 py-4 flex justify-center';

    const loadingCover = document.createElement('div');
    loadingCover.className = 'absolute w-4/5 h-60 rounded-lg bg-black';

    imgContainer.append(loadingCover);

    imagesContainer.append(imgContainer);

    imageRequest(imgContainer, loadingCover);
}

addImgButton.onclick = addNewImage;
