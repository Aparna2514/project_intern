/* === Services modal content === */
const serviceData = {
  design: {
    title: "Web Design",
    description: "We craft beautiful, responsive, and user-friendly websites to help your brand shine online."
  },
  seo: {
    title: "SEO Optimization",
    description: "Boost your website’s visibility on search engines with our expert SEO techniques."
  },
  marketing: {
    title: "Digital Marketing",
    description: "Drive targeted traffic and boost your sales with our result-driven marketing strategies."
  }
};

/* === Modal handlers === */
function openModal(key) {
  const modal = document.getElementById("serviceModal");
  document.getElementById("modalTitle").textContent = serviceData[key].title;
  document.getElementById("modalDescription").textContent = serviceData[key].description;
  modal.style.display = "flex";
}
function closeModal() { document.getElementById("serviceModal").style.display = "none"; }
window.addEventListener("click", (e) => {
  if (e.target.id === "serviceModal") closeModal();
});

/* === 3D Cube Rotation === */
let angle = 0;
function rotateCube(dir) {
  angle += (dir === "left" ? -90 : 90);
  document.getElementById("cube").style.transform = `rotateY(${angle}deg)`;
}

/* === Contact form (basic demo) === */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      const out = await res.json();
      alert(out.success ? "Message sent successfully!" : "Failed to send message.");
      if (out.success) form.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  });
});
