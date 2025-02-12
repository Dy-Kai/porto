// Initial
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
}

function CreateGalleryItem(imgName){
    const img = document.createElement('img');
    img.src = 'assets/img/aw/'+imgName+'.jpg';
    img.classList.add('gallery-img');
    img.alt = imgName;

    const div = document.createElement('div');
    div.classList.add('gallery-row', 'rounded', 'shadow');

    div.appendChild(img);

    const gallery = document.getElementById('gallery');
    gallery.appendChild(div);
}

for (let i = 0; i < 9; i++) {
    CreateGalleryItem(i+1);
}

// Update
const galleryImg = document.querySelectorAll('.gallery-img');

galleryImg.forEach(function(element) {
    element.addEventListener('click', function(event) {

    const imgPreviewHandler = document.getElementsByClassName('img-preview')[0];
    imgPreviewHandler.classList.add('show');

    imgPreviewHandler.children[1].src = event.target.src;
    setTimeout(function() {
        imgPreviewHandler.classList.remove('hide');
    }, 1000);
    })
});


const closeImgBtn = document.getElementById('close-preview');

closeImgBtn.addEventListener('click', function(){
    const img = document.getElementsByClassName('img-preview')[0];
    img.classList.add('hide');
    setTimeout(function() {
        img.classList.remove('show');
    }, 500);
})