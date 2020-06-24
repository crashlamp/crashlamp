let box = document.querySelectorAll(".box");
box.forEach((value, index) => {
  box[index].addEventListener("mouseover", function() {
    value.style.backgroundColor = "#aad9f1";
  });
  box[index].addEventListener("mouseout", function() {
    value.style.backgroundColor = "#9Ac9e1";
  });
})
//https://stackoverflow.com/questions/62545678/change-background-color-of-boxes-with-addeventlistener
