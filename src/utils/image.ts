const getImageSize = async (imageURL: string) => {
    const response = await fetch(imageURL);
    const blob = await response.blob();
    return blob.size;
}

export {
    getImageSize
}