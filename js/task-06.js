const valInput = document.querySelector("input#validation-input");
const dataLength = valInput.getAttribute("data-length");

valInput.addEventListener('blur', function(){
    if (!this.value){
        this.removeAttribute("class");
        return;
    }
    if (this.value.length != dataLength){
        this.setAttribute("class", "invalid");
        return;
    }
        this.setAttribute("class", "valid");
});