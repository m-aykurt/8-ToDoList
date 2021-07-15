let buton = document.querySelector(".btn");
let inputText = document.querySelector(".input");
let takvim = document.querySelector(".array")
let innerArray = document.querySelector(".inner-array")

buton.addEventListener("click", function(){
    takvim.innerHTML+= `<p class="box">${inputText.value}</p>`
})