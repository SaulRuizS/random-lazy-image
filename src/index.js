import { registerImg } from './lazy'

const unsplashRandom = 'https://source.unsplash.com/random';

const mainContainer = document.getElementById('main-container');

const addImgButton = document.createElement('button');
addImgButton.className = 'rounded-md bg-red-400 p-4 w-full my-6 text-base text-white';
addImgButton.textContent = 'New Image';

mainContainer.append(addImgButton);

let addedImages = 0;

async function addNewImage() {

    const unsplashResponse = await fetch(unsplashRandom);
    const newRndmImg = unsplashResponse.url;

    // console.log(newRndmImg);

    const imgContainer = document.createElement('div');
    imgContainer.className = 'p-12 flex justify-center';
    
    const randomImg = document.createElement('img');
    randomImg.className = 'h-80 w-6/7 rounded-lg object-cover';
    randomImg.dataset.src = newRndmImg; //dataset allows you to make your own html attributes

    imgContainer.append(randomImg);

    mainContainer.append(imgContainer);

    addedImages++;

    registerImg(imgContainer);

    console.log(`Total added images: ${addedImages}`);
}

addImgButton.onclick = addNewImage;
