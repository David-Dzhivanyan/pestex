const plus = document.querySelectorAll('.plus'),
    minus = document.querySelectorAll('.minus'),
    productPrice = document.querySelectorAll('.product-price'),
    totalCost = document.querySelectorAll('.total-cost'),
    amountPayable = document.querySelector('.amount-payable'),
    trashCan = document.querySelectorAll('.trash-can'),
    productInBasketContainer = document.querySelectorAll('.product-in-basket-container'),
    basket = document.querySelectorAll('.header-description')[document.querySelectorAll('.header-description').length - 1];
let productInBasketContainerCounter = productInBasketContainer.length;
plus.forEach(function(item, index){
    item.addEventListener('click', function(){
        this.previousElementSibling.textContent = Number(this.previousElementSibling.textContent) + 1;
        totalCost[index].textContent = Number(totalCost[index].textContent.slice(0,-1)) + Number(productPrice[index].textContent.slice(0,-1)) + ' ₽';
        amountPayable.textContent = Number(amountPayable.textContent.slice(0,-1)) + Number(productPrice[index].textContent.slice(0,-1)) + ' ₽';
        basket.textContent = amountPayable.textContent;
        minus[index].style.cursor = 'pointer';
        minus[index].style.color = '#101426';
    });
});

minus.forEach(function(item, index){
    item.style.cursor = 'default';
    item.style.color = '#999999';
    item.addEventListener('click', function(){
        if(this.nextElementSibling.textContent !== '1'){
            this.nextElementSibling.textContent = Number(this.nextElementSibling.textContent) - 1;
            totalCost[index].textContent = Number(totalCost[index].textContent.slice(0,-1)) - Number(productPrice[index].textContent.slice(0,-1)) + ' ₽';
            amountPayable.textContent = Number(amountPayable.textContent.slice(0,-1)) - Number(productPrice[index].textContent.slice(0,-1)) + ' ₽';
            basket.textContent = amountPayable.textContent;
            if(this.nextElementSibling.textContent === '1') {
                this.style.cursor = 'default';
                this.style.color = '#999999';
            }
        }      
    });
});

trashCan.forEach(function(item, index){
    item.addEventListener('click', function(){
        productInBasketContainer[index].remove();
        productInBasketContainerCounter--;
        console.log(productInBasketContainerCounter);
        amountPayable.textContent = Number(amountPayable.textContent.slice(0,-1)) - Number(totalCost[index].textContent.slice(0,-1)) + ' ₽';
        basket.textContent = amountPayable.textContent;
        if(productInBasketContainerCounter === 0){
            document.querySelector('.amount-payable-wrapper').remove();
            document.querySelector('.order-step').remove();
            document.querySelector('.my-order').textContent = 'Корзина';
            document.querySelector('.basket-is-empty').style.display = 'block';
            document.querySelector('.basket-is-empty').style.margin = '0 0 400px 0';
        }
    });
});

