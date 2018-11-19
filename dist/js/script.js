(function() {
  const modal = document.querySelectorAll(".modal");
  const openModalBtn = document.querySelectorAll(".open-modal-dialog");
  const primary = document.querySelectorAll("[data-type=btn-primary]");
  const closeBtns = document.querySelectorAll("[data-type=btn-close]");
  const createBackground = document.createElement("div");
  const modalHeader = document.querySelectorAll(".modal__header");
  const cross = document.createElement("a");

  for (let j = 0; j < openModalBtn.length; j++) {
    openModalBtn[j].addEventListener("click", function(event) {
      if (event.target == openModalBtn[j]) {
        const openModal = function() {
          modal[j].classList.remove("hide");
          document.body.insertBefore(createBackground, modal[j]);
          createBackground.classList.add("overlay");
        };
        const closeDialog = function() {
          modal[j].classList.add("hide");
          createBackground.remove();
          cross.remove();
        };
        const addCross = function() {
          cross.classList.add("btn-cross");
          cross.setAttribute("data-type", "btn-close");
          cross.innerHTML =
            '<img class="modal__icon--cross" src="img/icon-popup-close.svg" alt="close" />';
          modalHeader[j].appendChild(cross);
        };
        openModal();
        addCross();
        cross.addEventListener("click", function() {
          closeDialog();
        });
        for (let i = 0; i < closeBtns.length; i++) {
          closeBtns[i].addEventListener("click", function() {
            closeDialog();
          });
          createBackground.addEventListener("click", function(event) {
            if (event.target == createBackground) {
              closeDialog();
            }
          });
        }
        primary[j].addEventListener("click", function() {
          closeDialog();
          const WindowWithMsg = function() {
            alert("DONE :)");
          };
          setTimeout(WindowWithMsg, 500);
        });
      }
    });
  }
})();
