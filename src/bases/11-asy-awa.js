

const getImage = async () => { 
    try {
    const apiKey = 'CmNCqB3Sd85rdXFyJT3BC8KQ0PWqUctX';
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await peticion.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
} catch (error) {
        // manejo del error
}
}

getImage();