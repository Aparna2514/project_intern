// ✅ Lottie animation
lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://lottie.host/f0e15067-8a89-4630-bc04-4df90e4f32d4/Q4RAHRgQgy.json"
});

// ✅ Services modal content
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

// ✅ Open service modal
function openModal(serviceKey) {
  const modal = document.getElementById('serviceModal');
  const title = document.getElementById('modalTitle');
  const desc = document.getElementById('modalDescription');

  title.textContent = serviceData[serviceKey].title;
  desc.textContent = serviceData[serviceKey].description;
  modal.style.display = "flex";
}

// ✅ Close service modal
function closeModal() {
  document.getElementById('serviceModal').style.display = "none";
}

// ✅ Optional: Close modal when clicking outside it
window.addEventListener("click", function (e) {
  const modal = document.getElementById('serviceModal');
  if (e.target === modal) {
    closeModal();
  }
});

// ✅ 3D Cube Portfolio Rotation
let angle = 0;

function rotateCube(direction) {
  if (direction === 'left') {
    angle -= 90;
  } else if (direction === 'right') {
    angle += 90;
  }
  document.getElementById("cube").style.transform = `rotateY(${angle}deg)`;
}

// ✅ Contact form submission logic
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form'); // assumes only one form on the page

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const result = await response.json();

      if (result.success) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong.');
    }
  });
});
