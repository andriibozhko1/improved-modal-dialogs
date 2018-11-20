(function() {
  const modal = document.querySelectorAll(".modal");
  const modalContent = document.querySelectorAll(".modal__content");
  const openModalBtns = document.querySelectorAll(".open-modal-dialog");
  const primary = document.querySelectorAll("[data-type=btn-primary]");
  const closeBtns = document.querySelectorAll("[data-type=btn-close]");

  for (let j = 0; j < openModalBtns.length; j++) {
    const createBackground = document.createElement("div");
    const crossBtn = document.createElement("a");

    const openModal = function() {
      modal[j].classList.remove("hide");
      document.body.insertBefore(createBackground, modal[j]);
      createBackground.classList.add("overlay");
    };
    const addCrossBtn = function() {
      crossBtn.classList.add("btn-closeBtn");
      crossBtn.setAttribute("data-type", "btn-close");
      crossBtn.innerHTML =
        '<img class="modal__icon--closeBtn" src="img/icon-popup-close.svg" alt="close" />';
      modal[j].insertBefore(crossBtn, modalContent[j]);
    };
    const closeDialog = function() {
      modal[j].classList.add("hide");
      createBackground.classList.remove("overlay");
      crossBtn.remove();
    };
    const alertWindow = function() {
      alert("Done!");
    }
    primary[j].addEventListener("click", function() {
      closeDialog();
      setTimeout(alertWindow, 800);
    });

    closeBtns[j].addEventListener("click", closeDialog);
    crossBtn.addEventListener("click", closeDialog);
    createBackground.addEventListener("click", closeDialog);
    openModalBtns[j].addEventListener("click", function() {
      openModal();
      addCrossBtn();
    });
  }
})();
