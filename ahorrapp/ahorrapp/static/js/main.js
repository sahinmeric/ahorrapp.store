'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

    /*------------------
        all products save
    --------------------*/
    $.ajax({
        url: "http://ahorrapp.store/api/products/",
        type: "GET",
        success: function (result) {
            sessionStorage.setItem('allProducts', JSON.stringify(result));
        },
        error: function (error) {
            console.log(error);
        }
    });

    /*------------------
        product list save
    --------------------*/
    $.ajax({
        url: "http://ahorrapp.store/api/product_list/",
        type: "GET",
        success: function (result) {
            sessionStorage.setItem('product_list', JSON.stringify(result));
        },
        error: function (error) {
            console.log(error);
        }
    });
        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Hamburger Menu
    $(".Hamburger__open").on('click', function () {
        $(".Hamburger__menu__wrapper").addClass("show__Hamburger__menu__wrapper");
        $(".Hamburger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".Hamburger__menu__overlay").on('click', function () {
        $(".Hamburger__menu__wrapper").removeClass("show__Hamburger__menu__wrapper");
        $(".Hamburger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/

    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*--------------------------
        Saving favorites in session storage
    ----------------------------*/
    // $('.add-fav').on('click', function () {
    //     var t = (this.id);
    //     if (sessionStorage.getItem('favList')) {
    //         var a = []
    //         a = JSON.parse(sessionStorage.getItem('favList')) || [];
    //         if (a.includes(t)) {
    //             var a = []
    //             a = JSON.parse(sessionStorage.getItem('favList')) || [];
    //             a = a.filter(id => id !== t);
    //             sessionStorage.setItem('favList', JSON.stringify(a));
    //             document.querySelector('#qty').textContent = a.length;
    //         } else {
    //             a.push(t);
    //             sessionStorage.setItem('favList', JSON.stringify(a));
    //             document.querySelector('#qty').textContent = a.length;
    //         }            
    //     } else {
    //         var a = [];
    //         a.push(t);
    //         sessionStorage.setItem('favList', JSON.stringify(a));
    //         document.querySelector('#qty').textContent = a.length;
    //     }
    // });

    $('.add-fav').on('click', add_fav_new);
    
    function add_fav_new() {
        var prod_id = this.id;
        var product = {
                productId : prod_id,
                qty : 1
            };
        if (sessionStorage.getItem('prodList')) {
            var tmpList = JSON.parse(sessionStorage.getItem('prodList'));
            if (tmpList.find(prod => prod.productId === prod_id)) {
                let newList = tmpList.filter(prod => prod.productId !== prod_id);
                sessionStorage.setItem('prodList', JSON.stringify(newList));
                onLoadCartNumber();
            } else {
                tmpList.push(product);
                sessionStorage.setItem('prodList', JSON.stringify(tmpList));
                onLoadCartNumber ();
            }
        } else {
            var prodList= [];
            prodList.push(product);
            sessionStorage.setItem('prodList', JSON.stringify(prodList));
            onLoadCartNumber ();
        };
    };

    function onLoadCartNumber () {
        var tmp = []
        tmp = JSON.parse(sessionStorage.getItem('prodList')) || [];
        document.querySelector('#qty').textContent = tmp.length;
    }
onLoadCartNumber();
})(jQuery);