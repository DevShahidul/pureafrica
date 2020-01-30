;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        }).blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.




        $('#phone-nav').on('click', function () {
            $('body').toggleClass('navShown');
        });

        if ($("#card-slider").length) {
            $('#card-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                            },
                          ]
            });
        }
        
           if ($(".card-slider").length) {
            $('.card-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                            },
                          ]
            });
        }
        

        if($(".gallery-row-wrap").length){
            var cWrap = $('<div class="col-4-wrap"></div>');
            $('.gallery-row-wrap .col-4').each(function () {
                var o = $(this).next('.col-4').length;
                $(this).replaceWith(cWrap).appendTo(cWrap);
                if (!o) cWrap = $('<div class="col-4-wrapr"></div>');
            });
            
            var cWrap = $('<div class="col-2-wrap"></div>');
            $('.gallery-row-wrap .col-2').each(function () {
                var o = $(this).next('.col-2').length;
                $(this).replaceWith(cWrap).appendTo(cWrap);
                if (!o) cWrap = $('<div class="col-2-wrapr"></div>');
            });
        }
        
        var swiper = new Swiper('#mobi-slider', {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            speed: 700,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.mobi-slider .swiper-button-next',
                prevEl: '.mobi-slider .swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    centeredSlides: false,
                    loop: true,
                }
            }
        });
        
        var swiper = new Swiper('#desktop-slider', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            effect: 'fade',
            //centeredSlides: true,
            loop: true,
            speed: 800,
            /*on: {
                slideChangeTransitionStart: function () {
                    var activeSlideFigure = $(".swiper-slide-active .slider-item-inner figure img");
                    $(".slider-item-inner figure img").css({
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    });
                    activeSlideFigure.css({
                        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                    });
                },
            },*/
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.desktop-slider .swiper-button-next',
                prevEl: '.desktop-slider .swiper-button-prev',
            },
        });
        
        /*if($(".tab-inner-wrap").length){
            var maxHeight = Math.max.apply(null, $("div.tab-item-wrap div.slider-item").map(function (){
                return $(this).height();
            }).get());
            console.log(maxHeight);
            $(".tab-inner-wrap").height(maxHeight + 205);
        }*/
        /*

        if ($(window).width() > 767) {
            $("#tab-inner-wrap > div.tab-item-wrap").hide()
            $("#tab-inner-wrap > div.tab-item-wrap").eq(0).show()
            $(".tabed > li").removeClass("active")
            $(".tabed > li").eq(0).addClass("active")

            $(".tabed > li").each(function (i) {
                $(this).click(function () {
                    if ($(this).hasClass("active")) return false
                    else {
                        $(".tabed > li").removeClass("active")
                        $(this).addClass("active")

                        $("#tab-inner-wrap > div.tab-item-wrap").hide()
                        $("#tab-inner-wrap > div.tab-item-wrap").eq(i).show()
                    }
                })
            });
        }
*/

        var heroHeight = $(".hero-section").outerHeight()
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > heroHeight) {
                $('body').addClass('sticky-header');
            } else {
                $('body').removeClass('sticky-header');
            }
        });

        $('.hover').mouseenter(function () {
            $(this).addClass('hovered');
            $(this).parents(".hover-thum").addClass('hover-thum-show');
        });
        $('.hover').mouseleave(function () {
                $(this).removeClass('hovered');
                $(this).parents(".hover-thum").removeClass('hover-thum-show');
            }
        );
        
        
        //FAQs Accordion Function
        $(".accordion-item").each(function(){
            
            $(this).parent().find(".accordion-item").eq(0).addClass("active")
            $(this).parent().find(".accordion-item").eq(0).find(".accordion-text").slideDown();
            var $this = $(this);
            $this.find(" > h4").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-text").slideUp();
                if($this.find(".accordion-text:visible").length){
                    $(".accordion-item").removeClass("active")
                    $(".accordion-text").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        });
             
        
        if ($("#hero-slider").length) {
            $('#hero-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                customPaging: ".slider-controler ul li",
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                            },
                          ]
            }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                $('.slider-controler ul li').removeClass('active');
                $('.slider-controler ul li').eq(currentSlide).addClass('active');
            });
            
            $('.slider-controler ul li').click(function () {
                var goToThisIndex = $(this).data("slickIndex");
                $('#hero-slider').slick('slickGoTo', goToThisIndex, false);
            });
        }
        
        
        if ($("#journal-hero-slider").length) {
            $('#journal-hero-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: true,
                customPaging: ".slider-controler ul li",
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                            },
                          ]
            }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                $('.slider-controler ul li').removeClass('active');
                $('.slider-controler ul li').eq(currentSlide).addClass('active');
            });

            $('.slider-controler ul li').click(function () {
                var goToThisIndex = $(this).data("slickIndex");
                $('#journal-hero-slider').slick('slickGoTo', goToThisIndex, false);
            });
        }
        
        
        /* Modal*/
        
        if($("#modal-slider").length){          
            var storySlider = $("#modal-slider");
            var storyFigure = $("#modal-figure");
     
            storySlider.slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                arrows: false,
                fade: true,
                waitForAnimate: true,
                asNavFor: storyFigure,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            vertical: false,
                        }
                    }

                ]
            });


            storyFigure.slick({
                dots: false,
                vertical: false,
                asNavFor: storySlider,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1300,
                fade: true,
                arrows: false,
                infinite: false
            });
        }
        
        
        $(".team-item").click(function (e) {
            e.preventDefault();
            $("#about-modal").addClass('show-modal')
        })
        $("#closed").click(function (e) {
            e.preventDefault();
            $("#about-modal").removeClass('show-modal')
        })
        /* Modal*/
        
        
          /* Place info slider*/

        if ($(".place-info-slider").length) {
            $('.place-info-slider').slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ]
            });
        }
        /* Place info slider*/
        
           /* content-info-slider*/

        if ($(".content-info-slider").length) {
            $(".content-info-slider").slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ]
            });
        }
        /* content-info-slider*/
        
        
        if ($(".styled-select").length) {
            $(".styled-select").selectric();
        }
        
        if ($('.phone').length) {
            $(".phone").intlTelInput({
                separateDialCode: true,
                preferredCountries: ["GB"],

            });
        }
        
        $('.subnav').each(function(){
            var subnavWidth = $(this).outerWidth(),
            subNavTotalItems = $(this).find(' > li').length;
            $(this).find(' > li').css({
                'width' : 100 / subNavTotalItems + '%',
            });
        });
        
        
        $('.scroll-down').each(function(){
            $(this).find('> a').click(function(e){
                e.preventDefault();
                var target = $(this).parents('section').next();
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 700)
            });
        })
        
        
        
    }); // End ready function.

    $(window).on("load", function () {
        $("body").addClass("loaded");
        
        // Header animation 
        var logo = $(".home-header .main-logo");
        var delayTime = 2;
        var delayAncor = 3;
        $(".home-header .main-nav-inner > ul > li").each(function(i){ // Nav effect
            var $this = $(this);
            var delay = delayTime + (i * .2);
            TweenMax.to($this.find('>a'), .4,{opacity:1, y: 0, delay: delay});  
        }); //End Nav effect
        
        TweenMax.to(logo,.5,{opacity:1, delay: 2.8}); // Logo effect

        $(".home-header .call-to-action a").each(function(i){ // Call to action button effect
            var $this = $(this);
            var delay = delayAncor + (i * .2);
            TweenMax.to($this, .4,{opacity:1, delay: delay});  
        }); //End Call to action button effect
        
        
        // Hero section animation
        var heroBg = $(".home-hero-bg");
        var heroText = $(".home-content .hero-content-wrap .title-text");
        TweenMax.fromTo(heroBg,2,{scale:1.2},{scale:1,ease:Power1.easeOut});
        TweenMax.to(heroText,2,{opacity:1, y: 0, delay: 3.4});
        
        
    });
})(jQuery)