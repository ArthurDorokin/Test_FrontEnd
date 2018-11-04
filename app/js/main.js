$(document).ready(function(){

    $(".menu_list li, .menu_list_mob li").on("click","a", function (event) {
        event.preventDefault();
        $('.menu_open_mob').css({'display':'none'});
        $('body').css({'overflow':'auto'})
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



    function open_menu() {
        $('.menu_open').on('click', function () {
            $('.menu_open_mob').css({'display':'block'});
            $('body').css({'overflow':'hidden'})
        });
        $('.menu_open_close').on('click', function () {
            $('.menu_open_mob').css({'display':'none'});
            $('body').css({'overflow':'auto'})
        });
    }open_menu()




    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('head-down').addClass('head-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('head-up').addClass('head-down');
            }
        }

        lastScrollTop = st;
    }
});
