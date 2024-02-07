const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
function openModal(){
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
}

// Modal close function
// another way- an anonymous function is assigined to closeModal  
const closeModal = () => {    
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};