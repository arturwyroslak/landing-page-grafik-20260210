// Minimal interactivity for contact form and footer year
document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Fake submit — developer should integrate with an email provider or backend
      msg.textContent = 'Dziękuję! Twoja wiadomość została wysłana.';
      form.reset();
      setTimeout(()=> msg.textContent = '',4000);
    });
  }
});
