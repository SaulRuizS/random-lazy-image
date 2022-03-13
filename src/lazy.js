
const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const intersection = (filteredEntry) => {
    const containerNode = filteredEntry.target;
    const imageNode = containerNode.querySelector('img');
    console.log(imageNode.dataset.src);

    imageNode.src = imageNode.dataset.src;

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