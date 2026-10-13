const modoBtn = document.getElementById("modo-btn");

// The shared script is safe on pages without the theme demonstration.
if (modoBtn) {
  const updateTheme = (dark) => {
    document.body.classList.toggle("modo-escuro", dark);
    modoBtn.setAttribute("aria-pressed", String(dark));
    modoBtn.textContent = dark ? "Ativar modo claro" : "Ativar modo escuro";
  };
  updateTheme(document.body.classList.contains("modo-escuro"));
  modoBtn.addEventListener("click", () => {
    updateTheme(!document.body.classList.contains("modo-escuro"));
  });
}
