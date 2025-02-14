// functions
function CreateGalleryItems(imgName) {
    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = 'assets/img/aw/' + imgName + '.jpg';
    img.alt = imgName;

    const div = document.createElement('div');
    div.classList.add('gallery-row', 'rounded', 'shadow');

    div.appendChild(img);

    const gallery = document.getElementById('gallery');
    gallery.appendChild(div);
}

function CreateImgPreview(imgDir, imgAlt) {
    const pageTop = document.createElement('div');
    pageTop.id = 'page-top';

    const imgPreview = document.createElement('div');
    imgPreview.classList.add('img-preview', 'position-fixed', 'z-2');

    const closePreview = document.createElement('div');
    closePreview.id = 'close-preview';
    closePreview.setAttribute("onclick", "CloseImgPreview();");
    closePreview.classList.add('position-fixed', 'top-0', 'end-0', 'm-5');

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid', 'fa-xmark');
    closeIcon.style.fontSize = '30px';

    const img = document.createElement('img');
    img.classList.add('position-fixed', 'top-50', 'start-50', 'translate-middle');
    img.src = imgDir;
    img.alt = imgAlt;

    closePreview.appendChild(closeIcon);
    imgPreview.appendChild(closePreview);
    imgPreview.appendChild(img);
    pageTop.appendChild(imgPreview);

    const body = document.getElementById('body');
    body.insertBefore(pageTop, body.firstChild);
}

function OpenImgPreview() {
    const imgWindow = document.getElementsByClassName('img-preview')[0];
    imgWindow.style.visibility = 'visible';
    imgWindow.classList.add('showing');

    setTimeout(function () {
        imgWindow.classList.remove('showing');
    }, 500);
}

function CloseImgPreview() {  
    const imgWindow = document.getElementsByClassName('img-preview')[0];
    imgWindow.classList.add('hiding');

    setTimeout(function () {
        imgWindow.parentElement.remove();
    }, 500);
}

// Prevent user from selecting content
window.onload = function () {
    document.body.onselectstart = function () {
        return false;
    }
}

// variables
const facebookLink = 'https://www.facebook.com/dy.kaizu/'; // Link to facebook profile
const instagramLink = 'https://www.instagram.com/dy_kaizu'; // Link to instagram profile
const twitterLink = 'https://x.com/dykaiii'; // Link to twitter profile

document.querySelectorAll('.facebook-link').forEach(element => {
    element.href = facebookLink;
    element.target = '_blank';
});
document.querySelectorAll('.instagram-link').forEach(element => {
    element.href = instagramLink;
    element.target = '_blank';
});
document.querySelectorAll('.twitter-link').forEach(element => {
    element.href = twitterLink;
    element.target = '_blank';
});

// create gallery contents
for (let i = 0; i < 9; i++) {
    CreateGalleryItems(i + 1);
}

// Open image preview
const galleryImg = document.querySelectorAll('.gallery-img');
galleryImg.forEach(function (element) {
    element.addEventListener('click', function (event) {
        imgDir = event.target.src;
        imgAlt = event.target.alt;

        if (!document.getElementById('page-top')) CreateImgPreview(imgDir, imgAlt);

        OpenImgPreview();
    })
});