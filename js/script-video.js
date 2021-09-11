let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(bouton => {
    bouton.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        bouton.classList.add('active');
        let src = bouton.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});