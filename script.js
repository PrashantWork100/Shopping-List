const ulTag = document.querySelector("ul");

function newItem(newText) {
    const liTag = document.createElement("li");
    liTag.className = "item";

    const textNode = document.createTextNode(newText);

    const iTag = document.createElement("i");
    iTag.className = "fas fa-close";

    liTag.appendChild(textNode);
    liTag.appendChild(iTag);
    ulTag.appendChild(liTag);
}

const addBtn = document.querySelector("button");

addBtn.addEventListener('click', function() {
    const itemText = document.querySelector(".text");
    const inputValue = itemText.value;

    if(inputValue===""){
        alert("Please type something")
    }
    else if(ulTag.childElementCount < 10) {
   
    newItem(inputValue);

    itemText.value = '';
 }
else{
    alert("Length Exceeded")
}
});


ulTag.addEventListener('click', function(event) {
    if (event.target.classList.contains('fas')) {
        event.target.parentElement.remove();
    }
});




const clearAll = document.querySelector('.clear');

clearAll.addEventListener('click', function() {
    const liAll = document.querySelectorAll('li');
    liAll.forEach(function(li) {
        li.remove();
    });
});
