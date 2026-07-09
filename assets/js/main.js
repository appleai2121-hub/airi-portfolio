const buttons = document.querySelectorAll('.filter button');
const cards = document.querySelectorAll('.card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(c => {
      c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
    });
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

cards.forEach(c => {
  c.addEventListener('click', () => {
    if (c.dataset.link) {
      window.open(c.dataset.link, '_blank', 'noopener');
      return;
    }
    if (lightbox && lightboxImg && c.dataset.full) {
      lightboxImg.src = c.dataset.full;
      lightbox.classList.add('open');
    }
  });
});

// Prevent detail links from triggering parent card click (lightbox / external link)
document.querySelectorAll('.detail-link').forEach(link => {
  link.addEventListener('click', e => {
    e.stopPropagation();
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });
}
if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox) lightbox.classList.remove('open');
});
