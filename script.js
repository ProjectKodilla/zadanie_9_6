var list = document.getElementById("list");
var add = document.getElementById("addElem");

add.addEventListener ("click", function() {
    var element = document.createElement("li");
    element.innerHTML = "item";
    list.appendChild(element + "1");

});