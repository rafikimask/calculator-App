const btn = document.querySelectorAll(".btn");
const input = document.querySelector("input");

let string = "";

Array.from(btn).forEach((button) =>{
    button.addEventListener("click",(e) =>{
        
        // to make the calculator show result when '=' is clicked
        if (e.target.innerText == "=") {
            let result = eval(string);
            input.value = result;
        } 
        // to make the calculator 'reset' when 'C' is clicked
        else if (e.target.innerText == "C") {
            string = " ";
            input.value = string;
        }
        // to remove "C" from string
        else {
            string += e.target.innerText;
            input.value = string;
        }
        
    });
})