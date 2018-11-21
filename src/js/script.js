(function() {
  const modals = document.querySelectorAll(".modal");
  const modalContent = document.querySelectorAll(".modal__content");
  const openModalBtns = document.querySelectorAll(".open-modal-dialog");
  const primary = document.querySelectorAll("[data-type=btn-primary]");
  const closeBtns = document.querySelectorAll("[data-type=btn-close]");

  for (let j = 0; j < openModalBtns.length; j++) {
    const createBackground = document.createElement("div");
    const crossBtn = document.createElement("a");
    const modal = modals[j];

    const openModal = function(modal) {
      modal.classList.remove("hide");
      document.body.insertBefore(createBackground, modal);
      createBackground.classList.add("overlay");
    };
    const addCrossBtn = function(modal) {
      crossBtn.classList.add("btn-closeBtn");
      crossBtn.setAttribute("data-type", "btn-close");
      crossBtn.innerHTML = '<img class="modal__icon--closeBtn" src="img/icon-popup-close.svg" alt="close" />';
      modal.insertBefore(crossBtn, modalContent[j]);
    };
    const closeDialog = function(modal) {
      modal.classList.add("hide");
      createBackground.classList.remove("overlay");
      crossBtn.remove();
    };
    const alertWindow = function() {
      alert("Done!");
    };

    primary[j].addEventListener("click", function() {
      closeDialog(modal);
      setTimeout(alertWindow, 800);
    });
    closeBtns[j].addEventListener("click", function() {
      closeDialog(modal);
    });

    crossBtn.addEventListener("click", function() {
      closeDialog(modal);
    });

    createBackground.addEventListener("click", function() {
      closeDialog(modal);
    });

    openModalBtns[j].addEventListener("click", function() {
      openModal(modal);
      addCrossBtn(modal);
    });
  }
})();
