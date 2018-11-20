(function() {
  const modal = document.querySelectorAll(".modal");
  const modalContent = document.querySelectorAll('.modal__content')
  const openModalBtn = document.querySelectorAll(".open-modal-dialog");
  const primary = document.querySelectorAll("[data-type=btn-primary]");
  const closeBtns = document.querySelectorAll("[data-type=btn-close]");
  const createBackground = document.createElement("div");
  const closeBtn = document.createElement("a");

  for (let j = 0; j < openModalBtn.length; j++) {
    openModalBtn[j].addEventListener("click", function(event) {
        const openModal = function() {
          modal[j].classList.remove("hide");
          document.body.insertBefore(createBackground, modal[j]);
          createBackground.classList.add("overlay");
        };
        const closeDialog = function() {
          modal[j].classList.add("hide");
          createBackground.remove();
          closeBtn.remove();
        };
        const addCloseBtn = function() {
          closeBtn.classList.add("btn-closeBtn");
          closeBtn.setAttribute("data-type", "btn-close");
          closeBtn.innerHTML =
            '<img class="modal__icon--closeBtn" src="img/icon-popup-close.svg" alt="close" />';
          modal[j].insertBefore(closeBtn,modalContent[j]);
        };
        openModal();
        addCloseBtn();
        closeBtn.addEventListener("click", function() {
          closeDialog();
        });
        for (let i = 0; i < closeBtns.length; i++) {
          closeBtns[i].addEventListener("click", function() {
            closeDialog();
          });
          createBackground.addEventListener("click", function(event) {
              closeDialog();
          });
        }
        primary[j].addEventListener("click", function() {
          closeDialog();
          const WindowWithMsg = function() {
            alert("DONE :)");
          };
          setTimeout(WindowWithMsg, 500);
        });
    });
  }
})();
