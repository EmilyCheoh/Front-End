var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');
var slides = document.querySelector('.slides');
var dots = document.getElementsByClassName("point");

var index = 0;

leftButton.addEventListener('click', function (e) {
    console.log(e);
    if (index > 0) {
        index--;
        updateSlidesPosition();
        dots[index + 1].className = dots[index].className.replace(" active", "");
        dots[index].className += " active";
    } else {
        dots[index].className = dots[index].className.replace(" active", "");
        index = 3;
        updateSlidesPosition();
        dots[index].className += " active";
    }
    
});

rightButton.addEventListener('click', function (e) {
    console.log(e);
    if (index < 3) {
        index++;
        updateSlidesPosition();
        dots[index - 1].className = dots[index].className.replace(" active", "");
        dots[index].className += " active";
    } else {
        dots[index].className = dots[index].className.replace(" active", "");
        index = 0;
        slides.style.left = -1 * index * 100 + '%';
        dots[index].className += " active";
    }
});

function clickDot(i) {
    for (n = 0; n < dots.length; n++) {
        dots[n].className = dots[n].className.replace(" active", "");
    }
    index = i;
    updateSlidesPosition()
    dots[i].className += " active";
}

function updateSlidesPosition() {
    slides.style.left = -1 * index * 100 + '%';
}
