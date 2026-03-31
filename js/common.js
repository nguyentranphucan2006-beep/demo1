// common.js — Valorant Fanshop global utilities

// ===== FORMAT VND =====
function ntpa_formatVND(number) {
  if (isNaN(number)) return '0₫';
  return new Intl.NumberFormat('vi-VN').format(number) + '₫';
}

// ===== ELEMENT HELPER =====
function ntpa_el(id) {
  return document.getElementById(id);
}

// ===== SAFE LOCALSTORAGE =====
const ntpa_LOCAL = {
  _get: function(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || fallback); }
    catch(e) { return JSON.parse(fallback); }
  },
  _set: function(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); return true; }
    catch(e) { console.warn('Storage error:', e); return false; }
  },
  loadCart:      function() { return this._get('cart', '[]'); },
  saveCart:      function(c) { return this._set('cart', c); },
  loadWishlist:  function() { return this._get('wishlist', '[]'); },
  saveWishlist:  function(w) { return this._set('wishlist', w); },
  loadOrders:    function() { return this._get('orders', '[]'); },
  saveOrders:    function(o) { return this._set('orders', o); }
};

// ===== UPDATE CART COUNT UI (all pages) =====
function ntpa_updateCartCountUI() {
  try {
    const count = ntpa_LOCAL.loadCart().reduce(function(sum, item) {
      return sum + (parseInt(item.qty) || 0);
    }, 0);
    document.querySelectorAll('#cartCount, #ntpa_cartCount, .cart-count').forEach(function(el) {
      el.textContent = count;
      // Animate badge on change
      if (el.dataset.prev !== undefined && el.dataset.prev !== String(count)) {
        el.style.transform = 'scale(1.4)';
        setTimeout(function() { el.style.transform = ''; }, 250);
      }
      el.dataset.prev = count;
    });
  } catch(e) {
    console.warn('ntpa_updateCartCountUI error:', e);
  }
}

// ===== WISHLIST HELPERS =====
function ntpa_isWishlisted(id) {
  return ntpa_LOCAL.loadWishlist().includes(parseInt(id));
}

function ntpa_toggleWishlist(id, btn) {
  id = parseInt(id);
  let wishlist = ntpa_LOCAL.loadWishlist();
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(function(x) { return x !== id; });
  } else {
    wishlist.push(id);
  }
  ntpa_LOCAL.saveWishlist(wishlist);
}

// ===== GLOBAL TOAST (reusable across pages) =====
function ntpa_showToast(msg, type) {
  type = type || 'success';
  var colors = { success: '#38b2ac', error: '#ff4655', info: '#667eea' };
  var icons  = { success: 'fa-circle-check', error: 'fa-circle-exclamation', info: 'fa-circle-info' };
  var color  = colors[type] || colors.success;
  var icon   = icons[type]  || icons.success;

  var t = document.getElementById('siteToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'siteToast';
    t.style.cssText = [
      'position:fixed', 'bottom:24px', 'right:24px', 'z-index:9999',
      'background:#1e293b', 'border:1px solid rgba(255,255,255,0.1)', 'color:#fff',
      'padding:12px 18px', 'border-radius:10px',
      'font-family:Lexend,sans-serif', 'font-size:0.85rem', 'font-weight:600',
      'box-shadow:0 8px 24px rgba(0,0,0,0.4)',
      'transform:translateY(20px)', 'opacity:0',
      'transition:all 0.3s cubic-bezier(0.4,0,0.2,1)',
      'display:flex', 'align-items:center', 'gap:8px',
      'max-width:320px', 'pointer-events:none'
    ].join(';');
    document.body.appendChild(t);
  }
  t.innerHTML = '<i class="fa-solid ' + icon + '" style="color:' + color + ';flex-shrink:0"></i>' +
                '<span>' + msg + '</span>';
  t.style.borderColor = 'rgba(' + (type==='success'?'56,178,172':'255,70,85') + ',0.3)';
  t.style.opacity = '1';
  t.style.transform = 'translateY(0)';
  t.style.pointerEvents = 'auto';

  clearTimeout(t._hideTimer);
  t._hideTimer = setTimeout(function() {
    t.style.opacity = '0';
    t.style.transform = 'translateY(10px)';
    t.style.pointerEvents = 'none';
  }, 2800);
}

// ===== ADD TO CART HELPER =====
function ntpa_addToCart(productId, qty, variant) {
  qty = parseInt(qty) || 1;
  variant = variant || {};
  if (typeof ntpa_products === 'undefined') return false;
  var p = ntpa_products.find(function(x) { return x.id === productId; });
  if (!p) return false;
  var cart = ntpa_LOCAL.loadCart();
  var key = JSON.stringify(variant);
  var existing = cart.find(function(i) {
    return i.productId === productId && JSON.stringify(i.variant || {}) === key;
  });
  if (existing) existing.qty += qty;
  else cart.push({ productId: productId, name: p.name, price: p.price, qty: qty, variant: variant });
  ntpa_LOCAL.saveCart(cart);
  ntpa_updateCartCountUI();
  return p;
}

// ===== CART BADGE TRANSITION STYLE =====
(function() {
  var style = document.createElement('style');
  style.textContent = '.cart-badge { transition: transform 0.2s ease, background 0.2s ease; }';
  document.head.appendChild(style);
})();

// ===== INIT ON DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
  ntpa_updateCartCountUI();
});
