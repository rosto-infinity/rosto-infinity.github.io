let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(bouton => {
    bouton.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        bouton.classList.add('active');
        let src = bouton.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});



// script chargement


/**

 // script chargement

*/



var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}


/**

   // scroll du site

*/




window.onscroll = () => {


    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}