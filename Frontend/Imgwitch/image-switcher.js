const images = {
    hod: '../Uploads/HOD.png',
    spiderman: '../Uploads/SpiderMan.png',
    nature: '../Uploads/Nature.png'
};

function showImage(key) {
    const preview = document.getElementById('preview');
    const imagePath = images[key];

    if (!imagePath) {
        preview.removeAttribute('src');
        preview.alt = 'Image not found';
        return;
    }

    preview.src = imagePath;
    preview.alt = key + ' image';
}
