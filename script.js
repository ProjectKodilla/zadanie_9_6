var list = document.getElementById("list");
console.log(document.getElementById('list'));
var add = document.getElementById("addElem");
console.log(document.getElementById("addElem"));

add.addEventListener("click", function() {
    var documents = document.querySelectorAll("#list > li"); 
    console.log(documents);
    var element = document.createElement("li");
    element.innerHTML = "item" + " " + documents.length;
    list.appendChild(element);
}
); 