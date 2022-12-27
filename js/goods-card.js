const addToShoppingCart = document.querySelector(".go-to-basket-btn"),
    itemAddedToCart = document.querySelector(".item-added-to-cart-wrapper"),
    closeItemAddedToCart = document.querySelector(".close-item-added-to-cart"),
    actualPrice = document.querySelector(".actual-price"),
    amountProducts = document.querySelector(".amount-products"),
    changeAmountProductMinus = document.querySelectorAll(".change-amount-product")[0],
    changeAmountProductPlus = document.querySelectorAll(".change-amount-product")[1],
    basket = document.querySelectorAll('.header-description')[document.querySelectorAll('.header-description').length - 1];

changeAmountProductMinus.addEventListener('click', function(){
    if(amountProducts.textContent !== "1"){
        amountProducts.textContent = +amountProducts.textContent - 1;
    }
    if(amountProducts.textContent === "1"){
        document.querySelector('.minus').style.opacity = 0.25;
    }
});
changeAmountProductPlus.addEventListener('click', function(){
    amountProducts.textContent = +amountProducts.textContent + 1;
    document.querySelector('.minus').style.opacity = 1;
});
addToShoppingCart.addEventListener('click', function(){
    itemAddedToCart.style.display = "flex";
    basket.textContent = +basket.textContent.slice(0, -1) + (+actualPrice.firstElementChild.textContent * +amountProducts.textContent) + " ₽";
});
closeItemAddedToCart.addEventListener('click', function(){
    itemAddedToCart.style.display = "none";
});