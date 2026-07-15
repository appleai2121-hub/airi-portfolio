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

// Shared handler for activating a card (click or keyboard Enter/Space)
function activateCard(c) {
  if (c.dataset.link) {
    window.open(c.dataset.link, '_blank', 'noopener,noreferrer');
    return;
  }
  if (lightbox && lightboxImg && c.dataset.full) {
    lightboxImg.src = c.dataset.full;
    lightbox.classList.add('open');
  }
}

cards.forEach(c => {
  c.addEventListener('click', () => {
    activateCard(c);
  });

  c.addEventListener('keydown', e => {
    // Let detail-link handle its own Enter key without bubbling to the card
    if (e.target.classList.contains('detail-link')) return;
    // Space activates buttons but should scroll the page for role="link" cards
    const isLink = c.getAttribute('role') === 'link';
    if (e.key === 'Enter' || (e.key === ' ' && !isLink)) {
      e.preventDefault();
      activateCard(c);
    }
  });
});

// Prevent detail links from triggering parent card click (lightbox / external link)
document.querySelectorAll('.detail-link').forEach(link => {
  link.addEventListener('click', e => {
    e.stopPropagation();
  });
});

if (lightboxClose && lightbox) {
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
