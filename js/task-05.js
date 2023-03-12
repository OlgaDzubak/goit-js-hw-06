const inputName = document.querySelector("input#name-input");

inputName.addEventListener('input', function(){
    if (this.value){
        document.querySelector("span#name-output").textContent =this.value;
        return;
    }
    document.querySelector("span#name-output").textContent = "Anonymous";
});