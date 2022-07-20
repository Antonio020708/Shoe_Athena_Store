/* A if statement to check if page has loaded or not to ensure the js can load */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

/* End of first if statement */


/* Function named ready() which adds functionality to buttons in the cart section such as removing items , changing the quantity etc , using function of addEventListener to the correlating action */

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

/* End of the ready() function */


/* The variable of characters has been created which containeds all alphabets and numbers which are used in random code generator */

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/* Function of generateString() has been created with argument called length which is needed to decide how long the random could generated would be */

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

/* End of random code generator function */


/* Function of purchaseClicked() has been created for functionality of the confirm order button , the function of generateString() has been called in the alert which generates a code which is 9 characters long*/

function purchaseClicked() {
    alert('Thank you for your purchase , your reference code is: ' + (generateString(9)))
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

/* End of purchaseClicked function */


/* The following 3 functions were created to add functionality to the cart buttons for example , removing an item or adding another item */

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

/* End of buttons functionality */


/* function of addItemToCart() is created requiring 3 parameters which are used to display contents of the product to the cart such as the title and image of the product , contained in the function is a if statment which contains conditions not allowing the user to add 2 of the same items in the cart to ensure that the quantity function can be utilised properly*/

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Your cost is ' + price)
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100px" height="100px">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

/* End of addItemTocart() function */


/* Beginning of updateCartTotal() function which continuously updates according to user actions , this function has been called earlier in other functions as well to ensure proper functionality*/

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total += (price * quantity)

    }

    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

}

/* End of upDateCartTotal() function */


/* Beginning of finalSubmit() function which generates a code for a discount coupon */

function finalSubmit() {

    alert("Thank for your participation, you have receieved a 15% discount coupon with the code:" + (generateString(7)) + " for your next purchase.")

}

/* End of finalSubmit() function */


/* Beginning of jQuery function which hides and shows text from a p element , this function has been repeated containing different classes and id's in the selectors to target desired elements */

$(document).ready(function () {

    $("#hide").click(function () {
        $(".p1").css('visibility', 'hidden').hide(2500);
    });

    $("#show").click(function () {

        $(".p1").css('visibility', 'visible').show(2500);
    });
});


$(document).ready(function () {

    $("#hide2").click(function () {
        $(".p2").css('visibility', 'hidden').hide(2500);
    });

    $("#show2").click(function () {

        $(".p2").css('visibility', 'visible').show(2500);
    });
});

$(document).ready(function () {

    $("#hide3").click(function () {
        $(".p3").css('visibility', 'hidden').hide(2500);
    });

    $("#show3").click(function () {

        $(".p3").css('visibility', 'visible').show(2500);
    });
});

$(document).ready(function () {

    $("#hide4").click(function () {
        $(".p4").css('visibility', 'hidden').hide(2500);
    });

    $("#show4").click(function () {

        $(".p4").css('visibility', 'visible').show(2500);
    });
});

/* End of jQuery hide and show function */


/* Beginning of jQuery function for the drop-down toggle feature */

$(document).ready(function () {
    $("nav div").click(function () {
        $("ul").slideToggle();
        $("ul ul").css("display", "none");
    });


    $('ul li').click(function () {
        $(this).siblings().find('ul').slideUp();
        $(this).find('ul').slideToggle();
    });
});

/* End of the drop-down feature */


/* Beginning of the jQuery animate function which also contains chained elements of slide up and down */

$(".pic").hover(function () {
    $(".pic").animate({

        height: '250px',
        width: '250px'
    }).slideUp(1000).slideDown(1000);
});

$(".pic1").hover(function () {
    $(".pic1").animate({

        height: '250px',
        width: '250px'
    }).slideUp(1000).slideDown(1000);
});

$(".pic2").hover(function () {
    $(".pic2").animate({

        height: '250px',
        width: '250px'
    }).slideUp(1000).slideDown(1000);
});

$(".pic3").hover(function () {
    $(".pic3").animate({
        
        height: '250px',
        width: '250px'
    }).slideUp(1000).slideDown(1000);
});

/* End of jQuery element for animation and chained functions */