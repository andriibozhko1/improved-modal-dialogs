(function() {
  const modals = document.querySelectorAll(".modal");
  const modalContent = document.querySelectorAll(".modal__content");
  const openModalBtns = document.querySelectorAll(".open-modal-dialog");
  const primary = document.querySelectorAll("[data-type=btn-primary]");
  const closeBtns = document.querySelectorAll("[data-type=btn-close]");

  for (let j = 0; j < openModalBtns.length; j++) {
    const createBackground = document.createElement("div");
    const crossBtn = document.createElement("a");
    const index = j;

    const openModal = function(index) {
      modals[index].classList.remove("hide");
      document.body.insertBefore(createBackground, modals[index]);
      createBackground.classList.add("overlay");
    };
    const addCrossBtn = function(index) {
      crossBtn.classList.add("btn-closeBtn");
      crossBtn.setAttribute("data-type", "btn-close");
      crossBtn.innerHTML = '<img class="modal__icon--closeBtn" src="img/icon-popup-close.svg" alt="close" />';
      modals[index].insertBefore(crossBtn, modalContent[index]);
    };
    const closeDialog = function(index) {
      modals[index].classList.add("hide");
      createBackground.classList.remove("overlay");
      crossBtn.remove();
    };
    const alertWindow = function() {
      alert("Done!");
    };

    primary[j].addEventListener("click", function() {
      closeDialog(index);
      setTimeout(alertWindow, 800);
    });
    closeBtns[j].addEventListener("click", function() {
      closeDialog(index);
    });

    crossBtn.addEventListener("click", function() {
      closeDialog(index);
    });

    createBackground.addEventListener("click", function() {
      closeDialog(index);
    });

    openModalBtns[j].addEventListener("click", function() {
      openModal(index);
      addCrossBtn(index);
    });
  }
})();
