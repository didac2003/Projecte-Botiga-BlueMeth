var slides = document.getElementsByClassName("mySlides");
var slides2 = document.getElementsByClassName("slider");
$(document).ready(function(){
    var slideIndex = 0;
    slides[0].style.display = "block";

    document.getElementById('next').onclick = function PlusSlides () {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if(slideIndex == 4) slideIndex = 0
        slides[slideIndex].style.display = "block";
    }
    
    document.getElementById('nexta').onclick = function PlusSlides () {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex--;
        if(slideIndex == -1) slideIndex = 3
        slides[slideIndex].style.display = "block";
    }

    var slideIndex2 = 0;
    slides2[0].style.display = "block";
        
    document.getElementById('siguiente').onclick = function PlusSlides () {
        for (var i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slideIndex2++;
        if(slideIndex2 == 4) slideIndex2 = 0
        slides2[slideIndex2].style.display = "block";
    }

    document.getElementById('anterior').onclick = function PlusSlides () {
        for (var i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slideIndex2--;
        if(slideIndex2 == -1) slideIndex2 = 3
        slides2[slideIndex2].style.display = "block";
    }
})

function slider1() {
    slides[0].style.display = "block";
    for (let i = 1; i < 4; i++) {
      slides[i].style.display = "none";
    }
}

function slider2() {
    slides[1].style.display = "block";
    for (let i = 0; i < 4; i++) {
        if(i!=1) slides[i].style.display = "none";
    }
}

function slider3() {
    slides[2].style.display = "block";
    for (let i = 0; i < 4; i++) {
      if(i!=2) slides[i].style.display = "none";
    }
}

function slider4() {
    slides[3].style.display = "block";
    for (let i = 0; i < 3; i++) {
      slides[i].style.display = "none";
    }
}

function slide1() {
    slides2[0].style.display = "block";
    for (let i = 1; i < 4; i++) {
      slides2[i].style.display = "none";
    }
}

function slide2() {
    slides2[1].style.display = "block";
    for (let i = 0; i < 4; i++) {
        if(i!=1) slides2[i].style.display = "none";
    }
}

function slide3() {
    slides2[2].style.display = "block";
    for (let i = 0; i < 4; i++) {
      if(i!=2) slides2[i].style.display = "none";
    }
}

function slide4() {
    slides2[3].style.display = "block";
    for (let i = 0; i < 3; i++) {
      slides2[i].style.display = "none";
    }
}