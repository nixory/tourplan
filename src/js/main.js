$(document).ready(function() {
    var hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
        effect: "coverflow",
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });

    var reviewSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });

    $(document).ready(function() {
        $window = $(window);
        $('div[data-type="background"]').each(function() {
            var $bgobj = $(this);
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                var coords = '50% ' + yPos + 'px';
                $bgobj.css({ backgroundPosition: coords });
            });
        });
    });

    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function() {
        console.log("click");
        document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
    });

    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);

    function openModal() {
        var modalOverlay = $('.modal__overlay');
        var modalDialog = $('.modal__dialog');
        modalOverlay.addClass('modal__overlay--visible');
        modalDialog.addClass('modal__dialog--visible');
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $('.modal__overlay');
        var modalDialog = $('.modal__dialog');
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
    }
    $(document).on('keydown', function(event) {
        if (event.keyCode == 27) {
            event.preventDefault();
            var modalOverlay = $('.modal__overlay');
            var modalDialog = $('.modal__dialog');
            modalOverlay.removeClass('modal__overlay--visible');
            modalDialog.removeClass('modal__dialog--visible');
        }
    });
    $('.form').each(function() {
        $(this).validate({
            errorClass: "invalid animate__animated animate__headShake",
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "Name must be at least 2 letters long",
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com",
                },
                phone: {
                    required: "We need your phone number to contact you",

                },
            },
        });
    });

    $('.newsletter__subscribe').validate({
        errorClass: "sub-invalid",
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com",
            }
        }
    });
    AOS.init();
});