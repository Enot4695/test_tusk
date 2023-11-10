
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider_inner");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function ValidName() {
    var re=/^[а-яёА-ЯЁ\s]+$/;
    var myName = document.getElementById('name').value;
    var valid = re.test(myName);
    if (valid) output = '';
    else output = 'Имя введено некорректно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}

function ValidPhone() {
    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = '';
    else output = 'Номер телефона введен некорректно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
}


function dropMenu(){
    document.getElementById("drop_menu").classList.toggle("show");
}

scrollOffset = $(window).scrollTop();

window.onclick = function(event) {
    if (!event.target.matches('.nav_shop_link--drop_menu')) {

        var dropdowns = document.getElementsByClassName("drop_menu_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$("#nav_toggle").on("click", function (event){
    event.preventDefault()

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});

/* Collapse */
$("[data-collapse]").on("click", function (event){
    event.preventDefault()

    var $this=$(this),
        blockId=$this.data('collapse');

    $this.toggleClass("active");
});
