const btn = document.querySelector(".btn")
const toDoItem = document.querySelector(".input");
const array = document.querySelector(".array")
// let emptyArray = []

btn.addEventListener("click", () => {
    array.innerHTML += `<p class="box"><button class="btn-left" onclick=check(this)><i class="far fa-check-square"></i></button>${toDoItem.value}<button class="delete" onclick="Delete(this);"><i class="fas fa-trash-alt"></i></button></p>`;
    // array.innerHTML += '<p class="box">'+'<button><i class="far fa-check-square"></i></button>'+ toDoItem.value + '<button class="delete" onclick="Delete(this);"><i class="fas fa-trash-alt"></i></button>' + '</p>';
    // emptyArray.push(toDoItem.value)
    // emptyArray.map(element => element.innerHTML ='<p class="box">' + '<button class="delete" onclick="Delete(this);"></button>' + element + '</p>' )
})


function Delete(currentEl) {
    currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
    console.log(currentEl.parentNode.parentNode);
}

function check(currentEl){
    currentEl.nextSibling.style.color = "green";
    console.log(currentEl.nextSibling);
}