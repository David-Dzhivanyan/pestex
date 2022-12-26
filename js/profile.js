const inputInProfile = document.querySelectorAll(".altitle input");
inputInProfile.forEach(function(item){
    item.addEventListener('focus',function(){
        this.nextElementSibling.style.top = '5px';
        this.nextElementSibling.style.backgroundColor = 'white';
        this.nextElementSibling.style.fontSize = '14px'
        this.style.backgroundColor = "white";
        this.style.border = "1px solid #959FB3";
    });
    item.addEventListener('blur',function(){
        if(item.value === ''){
            this.nextElementSibling.style.top = '39px';
            this.nextElementSibling.style.backgroundColor = '';
            this.nextElementSibling.style.fontSize = '17px'
            this.style.backgroundColor = "#F7F9FC";
            this.style.border = "1px solid #E4E9F2";
        }
    });
});