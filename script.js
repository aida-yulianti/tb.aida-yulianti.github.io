const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    
    if(e.target.className == 'thumb') {

        jumbo.src = e.target.src;

        thumbs.forEach(function(thumb) {
           // if(thumb.classList.contains('active')) {
              //  thumb.classList.remove('actve');
           // }
           thumb.className = 'thumb';
        });

        e.target.classList.add('active');

    }
});