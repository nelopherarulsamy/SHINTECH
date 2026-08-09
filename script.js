// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(open => open.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Placeholder actions for Login / Register buttons
document.querySelectorAll('.btn-primary, .btn-success, .btn-outline-light, .btn-outline-glow').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`${btn.textContent.trim()} clicked — hook this up to your auth flow.`);
  });
});
