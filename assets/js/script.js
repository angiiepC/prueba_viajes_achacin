$(document).ready(function () {
    $(window).scroll(function () {
        var navbarTop = $(window).scrollTop()
        if(navbarTop > 500){
            $(".navbar").addClass("navbar-white");
        } else {
            $(".navbar").removeClass("navbar-white")
        }
    });
});

$(".submit").click(function () {
    alert("Información enviada con exito")
});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))