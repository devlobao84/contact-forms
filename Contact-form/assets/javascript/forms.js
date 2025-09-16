  document.getElementById("cotacaoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();

  // Validação simples
  if (!nome || !email || !whatsapp) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Digite um e-mail válido.");
    return;
  }

  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  if (!phoneRegex.test(whatsapp)) {
    alert("Digite um número de WhatsApp válido no formato (11) 99999-9999.");
    return;
  }

  // Se tudo ok, segue com modal
  const msg = `Obrigado pelo seu interesse, ${nome}! Nossa equipe entrará em contato em até 2 horas úteis para apresentar as melhores opções de plano para você.`;

  document.getElementById("successMessage").textContent = msg;
  document.getElementById("modalWhatsapp").textContent = whatsapp;
  document.getElementById("modalEmail").textContent = email;

  document.getElementById("successModal").style.display = "flex";
});

