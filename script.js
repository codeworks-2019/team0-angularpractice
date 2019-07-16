var inputElement = document.getElementById("dataToBind");
var showElement = document.getElementById("showBoundData");

// Add an event listener to listen for keyup event
if(inputElement){
  inputElement.addEventListener("keyup", function() {
    showElement.innerHTML = inputElement.value.toString();
  });
}
