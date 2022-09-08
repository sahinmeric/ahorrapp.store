'use strict';

(function ($) {

    /*------------------
        Update favorites count
    --------------------*/
    function onLoadCartNumber () {
        var tmp = []
        tmp = JSON.parse(sessionStorage.getItem('prodList')) || [];
        document.querySelector('#qty').textContent = tmp.length;
    }
    onLoadCartNumber();

    /*------------------
        Retrieve product data from
        session storage and create list
    --------------------*/
    function updateList() {
        var prodList = JSON.parse(sessionStorage.getItem('prodList'));
        var allProducts = JSON.parse(sessionStorage.getItem('allProducts'));
        var product_list = JSON.parse(sessionStorage.getItem('product_list'));
        var totalPrice = [0,0,0,0];
        
        $('tbody').empty();
        for (let i = 0; i < prodList.length; i++) {
            //prepare product name and img url
            var product_name = "";
            var product_img_url = "";
            var prod_qty = prodList[i].qty;
            var prod_id = prodList[i].productId;
            for (let k = 0; k <product_list.length ; k++) {
                if (product_list[k].id == prodList[i].productId) {
                    product_name = product_list[k].name;
                    product_img_url = product_list[k].img_url;
                };
            };
            // prepare new empty row
            $('tbody').append('<tr></tr>');
            // append product name and img url 
            $('tbody tr:last-child').append('<td class="shoping__cart__item"><img src="'+ product_img_url +'" alt=""></td>');
            $('tbody tr:last-child').append('<td class="shoping__cart__item"><h5>' + product_name + '</h5></td>');
            var idx = 0;
            for (let j = 0; j < allProducts.length; j++) {
                    var lastEmptyRow = $('tbody tr:last-child');
                if (prodList[i].productId == allProducts[j].product_id) {
                    // append each price
                    lastEmptyRow.append('<td class="shoping__cart__price">$'+ (allProducts[j].price * prod_qty) + '</td>');
                    totalPrice[idx] = totalPrice[idx] + (allProducts[j].price * prod_qty);
                    idx++;
                }
            };
            if (idx == 3) {
                lastEmptyRow.append('<td class="shoping__cart__price">$'+ 0 + '</td>');
            }
            lastEmptyRow.append('<td class="shoping__cart__quantity"><div class="quantity"><div class="pro-qty" id="'+ prod_id +'"><input type="text" value="'+ prod_qty+'"></div></div></td>');
            lastEmptyRow.append('<td class="shoping__cart__item__close" id="'+ prod_id +'"><span class="icon_close"></span></td>');
            var proQty = $('#' + prod_id +'.pro-qty');
            proQty.prepend('<span class="dec qtybtn" id="'+ prod_id +'">-</span>');
            proQty.append('<span class="inc qtybtn" id="'+ prod_id +'">+</span>');
        };

        // console.log(totalPrice);
        //add total row
        var tbody = $('tbody');
        
        tbody.append('<tr></tr>'); //new row
        $('tbody tr:last-child').append('<td class="shoping__cart__item"></td>'); //first column is empty
        $('tbody tr:last-child').append('<td class="shoping__cart__item"><h5>Total</h5></td>');
        $('tbody tr:last-child').append('<td class="shoping__cart__price">$'+ totalPrice[0] +'</td>');
        $('tbody tr:last-child').append('<td class="shoping__cart__price">$'+ totalPrice[1] +'</td>');
        $('tbody tr:last-child').append('<td class="shoping__cart__price">$'+ totalPrice[2] +'</td>');
        $('tbody tr:last-child').append('<td class="shoping__cart__price">$'+ totalPrice[3] +'</td>');

        setEvLists();
    };
    updateList();


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    // /*--------------------------
    //     Select
    // ----------------------------*/
    // $("select").niceSelect();

    /*-------------------
		Set event listeners
	--------------------- */
    function setEvLists() {
        var proQty = $('.pro-qty');

        proQty.on('click', '.qtybtn', function () {
            var prodList = JSON.parse(sessionStorage.getItem('prodList'));
            let prod_id = this.id;
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            const result = prodList.find(({ productId }) => productId == prod_id);
            if ($button.hasClass('inc')) {
                result.qty += 1
                sessionStorage.setItem('prodList', JSON.stringify(prodList));
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below 1
                if (oldValue > 1) {
                    result.qty -= 1
                    sessionStorage.setItem('prodList', JSON.stringify(prodList));
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find('input').val(newVal);
            updateList();
        });

        $('.shoping__cart__item__close').on('click', function () {
            var prod_id = (this.id);
            let tmpProdList = []
            tmpProdList = JSON.parse(sessionStorage.getItem('prodList')) || [];
            let newProdList = []
            newProdList = tmpProdList.filter(data => data.productId !== prod_id);
            sessionStorage.setItem('prodList', JSON.stringify(newProdList));
            onLoadCartNumber();
            updateList();
        });
    };    
})(jQuery);