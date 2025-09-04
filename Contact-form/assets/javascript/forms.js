/* Funcionalidade básica no Forms */

const form = document.getElementById("leadForm");
    const successMessage = document.querySelector(".success-message");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const plano = document.getElementById("plano").value;

      if (nome && email.includes("@") && telefone && plano) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
        form.reset();
      } else {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
      }
    });