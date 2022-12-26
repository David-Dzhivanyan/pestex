const priceSlider = document.querySelector('.price-slider'),
    priceInput = document.querySelector('.price label input');
priceInput.addEventListener('change', function(){
    priceInput.value = priceInput.value - priceInput.value % 100; 
    priceSlider.value = priceInput.value;
    if(priceInput.value > 10000){
        priceInput.value = 10000;
    }
    if(priceInput.value < 0){
        priceInput.value = 0;
    }
});
priceSlider.addEventListener('input',function(){
    priceSlider.value = priceSlider.value - priceSlider.value % 100; 
    priceInput.value = priceSlider.value;
});