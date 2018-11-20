(function() {
  const modal = document.querySelectorAll(".modal");
  const modalContent = document.querySelectorAll(".modal__content");
  const openModalBtns = document.querySelectorAll(".open-modal-dialog");
  const primary = document.querySelectorAll("[data-type=btn-primary]");
  const closeBtns = document.querySelectorAll("[data-type=btn-close]");
  const createBackground = document.createElement("div");

  for (let j = 0; j < openModalBtns.length; j++) {
    openModalBtns[j].addEventListener("click", function() {
      const crossBtn = document.createElement("a");

      const openModal = function() {
        modal[j].classList.remove("hide");
        document.body.insertBefore(createBackground, modal[j]);
        createBackground.classList.add("overlay");
      };

      const closeDialog = function() {
        modal[j].classList.add("hide");
        createBackground.classList.remove("overlay");
        crossBtn.remove();
      };

      const addCrossBtn = function() {
        crossBtn.classList.add("btn-closeBtn");
        crossBtn.setAttribute("data-type", "btn-close");
        crossBtn.innerHTML =
          '<img class="modal__icon--closeBtn" src="img/icon-popup-close.svg" alt="close" />';
        modal[j].insertBefore(crossBtn, modalContent[j]);
      };
      primary[j].addEventListener('click',function(){
        alert('DONE :)');
        closeDialog();
      });
      openModal();
      addCrossBtn();
      closeBtns[j].addEventListener("click", closeDialog);
      crossBtn.addEventListener("click", closeDialog);
      createBackground.addEventListener("click", closeDialog);
    });
  }
})();
