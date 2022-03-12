const unsplashRandom = 'https://source.unsplash.com/random';

const mainContainer = document.getElementById('main-container');

const addImgButton = document.createElement('button');
addImgButton.className = 'w-1/5 p-4 rounded-md bg-red-400';
addImgButton.textContent = 'New Image';

mainContainer.append(addImgButton);

let addedImages = 0;

async function addNewImage() {

    const unsplashResponse = await fetch(unsplashRandom);
    const newRndmImg = await unsplashResponse.url;

    // console.log(newRndmImg);

    const imgContainer = document.createElement('div');
    imgContainer.className = 'p-12 flex flex-col justify-center content-center';
    
    const randomImg = document.createElement('img');
    randomImg.className = 'w-3/5 rounded-lg';
    randomImg.src = newRndmImg;

    imgContainer.append(randomImg);

    mainContainer.append(imgContainer);

    addedImages++;
    console.log(`Total added images: ${addedImages}`);
}

addImgButton.onclick = addNewImage;
