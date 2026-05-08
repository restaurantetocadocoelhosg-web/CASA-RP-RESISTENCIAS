// ===================== ANO NO FOOTER =====================
document.getElementById('year').textContent = new Date().getFullYear();

// ===================== HEADER SCROLL =====================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===================== MENU MOBILE =====================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===================== BOTÕES FLUTUANTES =====================
const fabToggle = document.getElementById('fabToggle');
const fabItems = document.getElementById('fabItems');
fabToggle.addEventListener('click', () => {
  fabToggle.classList.toggle('active');
  fabItems.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.fab-wrap')) {
    fabToggle.classList.remove('active');
    fabItems.classList.remove('open');
  }
});

// ===================== SCROLL ANIMATIONS =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// ===================== FORMULÁRIO → WHATSAPP =====================
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = e.target.nome.value.trim();
  const contato = e.target.contato.value.trim();
  const equipamento = e.target.equipamento.value.trim();
  const mensagem = e.target.mensagem.value.trim();
  const text = [
    `Olá! Me chamo *${nome}*.`,
    contato ? `Contato: ${contato}` : '',
    equipamento ? `Equipamento: ${equipamento}` : '',
    mensagem,
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/5521965987979?text=${encodeURIComponent(text)}`, '_blank');
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
