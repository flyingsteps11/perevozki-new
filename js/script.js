$(document).ready(function () {
    const owl1 = $("#reviews").owlCarousel({
        dots: true,
        nav: false,
        margin: 40,
        autoWidth: true,
        dotsContainer: '.dots-wrap',
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            475: {
                items: 5
            }
        }
    });
    $('.first-stage__btn, .consultation').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#modal').addClass('overlay-visible');
    });
    $('.services__btn').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#modal2').addClass('overlay-visible');
    });
    $(document).mouseup(function (e) {
        var container = $("#modal");
        if (container.has(e.target).length === 0) {
            $('#modal').removeClass('overlay-visible');
            $('#modal2').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});