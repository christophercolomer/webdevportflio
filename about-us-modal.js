document.addEventListener("DOMContentLoaded", () => {
  const teamCards = document.querySelectorAll(".team-card");
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");
  let currentCard = null;

  function closeDetails() {
    overlay.hidden = true;
    overlay.classList.remove("open");

    if (currentCard) {
      currentCard.hidden = true;
      currentCard = null;
    }

    document.body.style.overflow = "";
  }

  teamCards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetId = card.dataset.target;
      const detailCard = document.getElementById(targetId);

      if (!detailCard) return;

      if (currentCard) {
        currentCard.hidden = true;
      }

      detailCard.hidden = false;
      currentCard = detailCard;
      overlay.hidden = false;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", closeDetails);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeDetails();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closeDetails();
    }
  });
});
