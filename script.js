$(document).ready(() => {
        $('#menu').click(function () {
            $(this).toggleClass('fa-angle-left'); //changes the symbol of menu when clicked
            $('header').toggleClass('toggle'); 
        });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-angle-left'); //removes the menu when scrolled a certain distance
        $('header').removeClass('toggle'); 
    });

    });