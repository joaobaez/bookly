let selectedRating = 0;

const stars = document.querySelectorAll(".star-button");

const ratingMessage = document.getElementById("rating-message");

const successMessage = document.getElementById("success-message");

const reviewText = document.getElementById("review-text");

const ratingTexts = {
    1: "Não gostei",
    2: "Poderia ser melhor",
    3: "Gostei",
    4: "Muito bom",
    5: "Adorei"
};


function updateStars(rating) {
    
    stars.forEach((star) => {
        
        const currentRating = Number(star.dataset.rating);

        star.classList.toggle("active", currentRating <= rating);
  });
}


function animateStars() {

    stars.forEach((star) => {

        star.addEventListener("click", () => {

            selectedRating = Number(star.dataset.rating);

            updateStars(selectedRating);

            ratingMessage.textContent = `${selectedRating}/5 estrelas • ${ratingTexts[selectedRating]}`;
        });
    });

    document
        .getElementById("evaluation-form")
        .addEventListener("submit", function (e) {

        e.preventDefault();

        if (selectedRating === 0) {
            alert("Selecione uma nota.");
            return;
        }

        if (reviewText.value.trim() === "") {
            alert("Escreva sua avaliação.");
            reviewText.focus();
            return;
        }

        successMessage.style.display = "block";

        const publishButton = document.querySelector('button[type="submit"]');

        publishButton.disabled = true;

        publishButton.textContent = "Publicando...";
      
        setTimeout(() => { 
            window.location.href = "../";
        }, 1500);
    });
}

animateStars();
