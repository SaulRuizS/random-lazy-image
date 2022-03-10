const unplashRandom = 'https://source.unsplash.com/random';

const mainContainer = document.getElementById('main-container');
// mainContainer.className = 'flex flex-col justify-center content-center'

const addImgButton = document.createElement('button');
addImgButton.className = 'w-1/5 rounded-md bg-red-400';
addImgButton.textContent = 'New Image';

mainContainer.append(addImgButton);

const addNewImage = () => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'w-3/5 p-4 contents';
    
    const randomImg = document.createElement('img');
    randomImg.className = 'rounded-lg';
    randomImg.src = unplashRandom;

    imgContainer.append(randomImg);

    mainContainer.append(imgContainer);

    console.log(imgContainer);
}

addImgButton.onclick = addNewImage;
