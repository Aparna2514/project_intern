
// Lottie animation
lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets4.lottiefiles.com/packages/lf20_tll0j4bb.json"
});

// ✅ Services modal functionality
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

function openModal(serviceKey) {
  const modal = document.getElementById('serviceModal');
  const title = document.getElementById('modalTitle');
  const desc = document.getElementById('modalDescription');

  title.textContent = serviceData[serviceKey].title;
  desc.textContent = serviceData[serviceKey].description;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById('serviceModal').style.display = "none";
}

// Optional: Close modal when clicking outside
window.addEventListener("click", function(e) {
  const modal = document.getElementById('serviceModal');
  if (e.target === modal) {
    closeModal();
  }
});

let angle = 0;

function rotateCube(direction) {
  if (direction === 'left') {
    angle -= 90;
  } else if (direction === 'right') {
    angle += 90;
  }
  document.getElementById("cube").style.transform = `rotateY(${angle}deg)`;
}



