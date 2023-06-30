let container = document.querySelector(".container");
let themesChange = document.querySelector(".themes");
let input = document.getElementById("input");
let nums = document.querySelectorAll(".nums span:not(.del)");
let delBtn = document.querySelector(".del");
let resetBtn = document.querySelector(".reset");
let resultBtn = document.querySelector(".res");

// Changeing the theme 
let defaultTheme = 1;
themesChange.onclick = _ => {
    defaultTheme++;
    defaultTheme >= 4  ? defaultTheme = 1 : "";
    console.log(`hi => ${defaultTheme}`);
    defaultTheme == 1 ? container.classList.remove("theme3") :
    defaultTheme == 2 ? container.classList.add("theme2") :
    defaultTheme == 3 ? container.classList.remove("theme2") / container.classList.add("theme3") : "";
}
// Programming the keypord 
// Numbers and Calculations
nums.forEach(e => {
    e.addEventListener("click", function () {
        if (this.innerHTML == "x") {
            input.value += "*";
        }
        else {
            input.value += this.innerHTML
        }
    })
})
// Delete button
delBtn.onclick = () => {
    let calculation = input.value; 
    let calculationArr = [...calculation];
    calculationArr.pop();
    calculation = calculationArr.join("");
    input.value = calculation;
}

// Reset button
resetBtn.onclick = () => {
    input.value = "";
}
resultBtn.onclick = () => {
    console.log("Result button");
    input.value = eval(input.value);
}

