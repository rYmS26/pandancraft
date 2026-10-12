'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Buka menu');
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

const filters = document.querySelectorAll('[data-filter]');
const products = document.querySelectorAll('[data-category]');
const catalogStatus = document.createElement('p');
catalogStatus.className = 'catalog-status';
catalogStatus.setAttribute('role', 'status');
catalogStatus.setAttribute('aria-live', 'polite');
document.getElementById('koleksi').append(catalogStatus);
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let count = 0;
  products.forEach(product => {
    product.hidden = button.dataset.filter !== '0' && product.dataset.category !== button.dataset.filter;
    if (!product.hidden) count++;
  });
  catalogStatus.textContent = `${count} produk dalam kategori ${button.textContent}.`;
}));

// Replace the reference's example contact number in every order link.
const configuredNumber = String(window.PANDANCRAFT_CONFIG?.whatsappNumber || '').trim();
const contactIsReady = /^[1-9]\d{7,14}$/.test(configuredNumber);
const dialog = document.createElement('dialog');
dialog.className = 'contact-dialog';
dialog.setAttribute('aria-labelledby', 'contact-title');
dialog.innerHTML = '<h2 id="contact-title">Kontak perajin belum tersedia</h2><p>Nomor WhatsApp resmi sedang disiapkan. Silakan kembali lagi untuk melakukan pemesanan.</p><form method="dialog"><button class="dialog-close" autofocus>Tutup</button></form>';
document.body.append(dialog);
document.querySelectorAll('a[data-whatsapp-source]').forEach(link => {
  const original = new URL(link.dataset.whatsappSource);
  const message = original.searchParams.get('text') || 'Halo Pandancraft, saya ingin bertanya tentang produk anyaman pandan.';
  if (contactIsReady) {
    link.href = `https://wa.me/${configuredNumber}?text=${encodeURIComponent(message)}`;
  } else {
    link.href = '#kontak';
    link.removeAttribute('target');
    link.addEventListener('click', event => {
      event.preventDefault();
      dialog.showModal();
    });
  }
});
document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
