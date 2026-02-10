// Interactivity: contact form behavior, footer year, mobile nav, lightbox, skill bars
document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Contact form behavior (works with Netlify or simulated)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', function(e){
      // If Netlify is active, allow normal submit to Netlify endpoint
      if(form.getAttribute('data-netlify') === 'true') return;
      e.preventDefault();
      msg.textContent = 'Dziękuję! Twoja wiadomość została wysłana.';
      form.reset();
      setTimeout(()=> msg.textContent = '',4000);
    });
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.6rem';
    });
  }

  // Lightbox for portfolio
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  document.querySelectorAll('.tile-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-full');
      lightboxImg.src = src;
      lightboxImg.alt = btn.querySelector('img').alt || '';
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    });
  });
  function closeLightbox(){
    lightbox.setAttribute('aria-hidden','true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });

  // Animate skill bars when in view
  const skillBars = document.querySelectorAll('.skill-bar');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const level = el.getAttribute('data-level') || 50;
        el.querySelector('::after');
        el.style.setProperty('--level', level + '%');
        el.querySelector('::after');
        el.querySelectorAll; // noop to avoid linter warnings
        el.style.setProperty('--dummy','');
        // set width via inline style on pseudo via JS by toggling a class
        el.classList.add('filled');
        observerDisconnectLater();
      }
    });
  }, {threshold:0.2});
  function observerDisconnectLater(){
    // simple: disconnect after first fill
    try{ obs.disconnect(); }catch(e){}
  }
  skillBars.forEach(b=> obs.observe(b));

  // Simple enhancement: close mobile nav when link clicked
  document.querySelectorAll('#nav a').forEach(a=> a.addEventListener('click', ()=>{
    if(window.innerWidth <= 900 && navToggle){
      navToggle.setAttribute('aria-expanded','false');
      nav.style.display = '';
    }
  }));
});
