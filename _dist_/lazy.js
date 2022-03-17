let loadedImages = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const intersection = (filteredEntry) => {
    const containerNode = filteredEntry.target;
    const imageNode = containerNode.querySelector('img');

    imageNode.src = imageNode.dataset.src;
    imageNode.dataset.loaded = 'loaded';

    console.log(`Loaded Images: ${++loadedImages}`);

    observer.unobserve(containerNode);
}

const observer = new IntersectionObserver((entry) => {
    entry
        .filter(isIntersecting)
        .forEach(intersection)
    ;
});

export const registerImg = (imageContainer) => {
    observer.observe(imageContainer);
};