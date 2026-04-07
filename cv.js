// ===== CUSTOM CURSOR =====
const cursor = document.createElement('div');
cursor.classList.add('cursor');
const follower = document.createElement('div');
follower.classList.add('cursor-follower');
document.body.appendChild(cursor);
document.body.appendChild(follower);

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// ===== ASIDE TOGGLE (mobile) =====
const cvAside = document.getElementById('cvAside');
const asideToggle = document.getElementById('asideToggle');

if (asideToggle) {
  asideToggle.addEventListener('click', () => {
    cvAside.classList.toggle('open');
  });

  // Ferme l'aside si on clique sur le main
  document.getElementById('cvMain').addEventListener('click', () => {
    cvAside.classList.remove('open');
  });
}

// ===== SCROLL REVEAL =====
const cvSections = document.querySelectorAll('.cv-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cvSections.forEach(section => observer.observe(section));
