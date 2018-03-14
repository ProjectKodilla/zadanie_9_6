var list = document.getElementById("list");
var add = document.getElementById("addElem");

add.addEventListener("click", function() {
    var documents = document.querySelectorAll("#list > li"); 
    var element = document.createElement("li");
    element.innerHTML = "item " + documents.length;
    list.appendChild(element);
}
); 