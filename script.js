$(document).ready(() => {
        $('#menu').click(function () {
            $(this).toggleClass('fa-angle-down'); //changes the symbol of menu when clicked
            $('header').toggleClass('toggle');
        });

    });