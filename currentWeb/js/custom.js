var nav = document.getElementById('nav');

window.onscroll = function(){
    if(window.pageYOffset > 50){
        nav.style.background = "rgba(0, 48, 87, 0.9)";

    }
    else{
        nav.style.background = "transparent"
    }
}

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});



  


