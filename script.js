const root = document.documentElement;

/* THEME TOGGLE */
const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* COPY EMAIL */
const copyBtn = document.getElementById("copy-email");
const label = document.getElementById("email-label");

copyBtn.addEventListener("click", async () => {
  const email = copyBtn.getAttribute("data-email");

  try {
    await navigator.clipboard.writeText(email);
    label.textContent = "Copied!";

    setTimeout(() => {
      label.textContent = "Email";
    }, 1500);

  } catch (err) {
    label.textContent = "Error";
  }
});