const CATEGORIES = [
  { id: 'all',      label: 'Összes' },
  { id: 'hardver',  label: 'Hardver' },
  { id: 'notebook', label: 'Notebook' },
  { id: 'pc',       label: 'PC / Szerver' },
  { id: 'mobil',    label: 'Mobil / Tablet' },
  { id: 'konzol',   label: 'Konzol' },
  { id: 'tvaudio',  label: 'TV / Audió' },
  { id: 'foto',     label: 'Fotó / Videó' },
  { id: 'otthon',   label: 'Otthon' }
];

const DEFAULT_PRODUCTS = [
  { id: 1, title: "ASUS ROG Strix RTX 3080 OC 10GB", category: "hardver", price: 185000, location: "Budapest", condition: "Újszerű", shipping: true, seller: "DextyPremium", sellerRating: 2136, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80", description: "Kiváló állapotú RTX 3080, gyári dobozával, garanciával. Bányászva nem volt." },
  { id: 2, title: "iPhone 14 Pro 128GB lila", category: "mobil", price: 249900, location: "Debrecen", condition: "Használt", shipping: true, seller: "iTechStore", sellerRating: 842, image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=600&q=80", description: "Kártyafüggetlen, karcmentes kijelző, 89% akku, töltőkábellel." },
  { id: 3, title: "PlayStation 5 Slim + 2 kontroller", category: "konzol", price: 175000, location: "Győr", condition: "Újszerű", shipping: false, seller: "Atiss199", sellerRating: 128, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80", description: "3 hónapos, 2 DualSense kontrollerrel, személyes átvétel Győrben." },
  { id: 4, title: "Lenovo ThinkPad T14 Gen 2", category: "notebook", price: 165000, location: "Budapest", condition: "Újszerű", shipping: true, seller: "ZoltanPC", sellerRating: 1540, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80", description: "i7, 16GB RAM, 512GB SSD, magyar billentyűzet." },
  { id: 5, title: "LG C2 55 OLED TV", category: "tvaudio", price: 310000, location: "Szeged", condition: "Újszerű", shipping: false, seller: "Cinephile_HU", sellerRating: 45, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80", description: "120Hz, ideális konzolhoz, dobozával." },
  { id: 6, title: "Sony Alpha A7 III váz", category: "foto", price: 385000, location: "Pécs", condition: "Újszerű", shipping: true, seller: "PhotoGuru", sellerRating: 310, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80", description: "18e expo, 2 akku, töltő, nyakpánt." },
  { id: 7, title: "Samsung Galaxy S24 Ultra", category: "mobil", price: 210000, location: "Csepel", condition: "Használt", shipping: true, seller: "adam6666", sellerRating: 52, image: "https://cdn.alza.hu/Foto/ImgGalery/Image/samsung-galaxy-s24-ultra-recenze-2.jpg", description: "Hosszú ideig használt, de működőképes, töltőt, ceruzát adok hozzá." },
  { id: 8, title: "Predator Helios Neo 16", category: "notebook", price: 760000, location: "Egyek", condition: "Újszerű", shipping: true, seller: "Olajka02", sellerRating: 632, image: "https://westnotebook.hu/wp-content/uploads/2025/09/1660438_0c-b754bd35bc0d91.jpg", description: "Soha nem használt, csak kibontott, a dobozban tudom küldeni, minden tartozékával" },
  { id: 9, title: "Xbox Game Pass Ultimate kedvező áron, 1 hónapos", category: "konzol", price: 6600, location: "Debrecen", condition: "Újszerű", shipping: false, seller: "RudiLicenc", sellerRating: 2520, image: "https://cdn.rios.hu/dl/uad/2021-11/5327060/fpp_12mo_emea_enuk_fob.png", description: "DIGITÁLIS KÁRTYA. SZÁLLÍTÁS OFF." },
  { id: 10, title: "JBL XTREME 3 eredeti bluetooth hangfal ELADÓ!!", category: "tvaudio", price: 55000, location: "Egyek", condition: "Használt", shipping: true, seller: "reha2000", sellerRating: 132, image: "https://cdn.rios.hu/dl/uad/2026-11/7779735/1.jpg", description: "Eredeti JBL Xtreme 3 bluetooth hangfal, jó állapotban, működőképes." }
];

function getProducts() {
  return DEFAULT_PRODUCTS;
}

function saveProducts(list) {
  localStorage.setItem('philter_products', JSON.stringify(list));
}

function getFavs() {
  return JSON.parse(localStorage.getItem('philter_favs') || '[]');
}

function saveFavs(list) {
  localStorage.setItem('philter_favs', JSON.stringify(list));
}

function getCart() {
  return JSON.parse(localStorage.getItem('philter_cart') || '[]');
}

function saveCart(list) {
  localStorage.setItem('philter_cart', JSON.stringify(list));
}

function updateBadges() {
  const favEl = document.getElementById('favCount');
  const cartEl = document.getElementById('cartCount');
  if (favEl) favEl.textContent = getFavs().length;
  if (cartEl) cartEl.textContent = getCart().length;
}

function toggleFav(id) {
  const favs = getFavs();
  const i = favs.indexOf(id);
  if (i > -1) favs.splice(i, 1);
  else favs.push(id);
  saveFavs(favs);
  updateBadges();
}

function addToCart(id) {
  const cart = getCart();
  if (!cart.includes(id)) cart.push(id);
  saveCart(cart);
  updateBadges();
}

function removeFromCart(id) {
  saveCart(getCart().filter(x => x !== id));
  updateBadges();
}

function findProduct(id) {
  return getProducts().find(p => p.id === id);
}

function formatPrice(n) {
  return n.toLocaleString('hu-HU') + ' Ft';
}

document.addEventListener('DOMContentLoaded', updateBadges);