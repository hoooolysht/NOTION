


const form = document.forms["form"];

form.addEventListener("input", inputHandler)

function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target)
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    // console.log(inputValue, reg)
    if (reg.test(inputValue)) {
        el.style.border = "1px solid rgb(0, 196, 0)";
    } else {
        el.style.border = "1px solid rgb(255, 0, 0)";
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("btn__confirm").disabled = true;
  });

var inputs = [].slice.call(document.querySelectorAll('input[data-rule]')),
button = document.querySelector('button[btnConfirm]');

inputs.forEach(function(el){
  el.addEventListener('input', checkInputs, false);
});
function checkInputs(){
	var empty = inputs.filter(function(el){
    return el.value.trim() === '';
  }).length;
  button.disabled = empty !== 0;
}
checkInputs();
