const oldCustomer = document.querySelector(".old-customer"),
    modalWindowWrapper = document.querySelector(".sign-in-form-wrapper"),
    modalWindow = document.querySelector(".sign-in-form-modal-window"),
    closeModalWindow = document.querySelector(".close-modal-window"),
    inputNewCustomer = document.querySelector("#new-customer"),
    inputInModalWindow = document.querySelectorAll(".sign-in-form input");
oldCustomer.addEventListener('click', function(){
    modalWindowWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";
    setTimeout(function(){
        modalWindow.style.top = "30px";
        modalWindow.style.opacity = 1;
        modalWindowWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    },0);
});
closeModalWindow.addEventListener('click', function(){
    setTimeout(function(){
        modalWindow.style.top = "-50px";
        modalWindow.style.opacity = 0;
        modalWindowWrapper.style.backgroundColor = "rgba(0, 0, 0, 0)";
        inputNewCustomer.checked = true;
    },0);
    setTimeout(function(){
        document.body.style.paddingRight = "";
        document.body.style.overflow = "";
        modalWindowWrapper.style.display = "none";
    },400);
});
inputInModalWindow.forEach(function(item,index){
    item.addEventListener('focus',function(){
        this.nextElementSibling.style.top = "6px";
        this.nextElementSibling.style.backgroundColor = "white";
        this.nextElementSibling.style.fontSize = "14px";
        this.style.backgroundColor = "white";
        this.style.border = "1px solid #959FB3";
    });
    item.addEventListener('blur',function(){
        if(item.value == ""){
            this.nextElementSibling.style.top = "39.5px";
            this.nextElementSibling.style.backgroundColor = "";
            this.nextElementSibling.style.fontSize = "18px";
            this.style.backgroundColor = "#F7F9FC";
            this.style.border = "1px solid #E4E9F2";
        }
        if(item.value !== ""){
            this.style.backgroundColor = "white";
            this.style.border = "1px solid #959FB3";
        }
    });
});