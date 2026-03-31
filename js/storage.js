// storage.js
const STORAGE_KEYS = { CART: 'cart', WISHLIST: 'wishlist', ORDERS: 'orders' };

export function loadCart(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || []; }
  catch(e){ return []; }
}
export function saveCart(cart){ localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart)); }

export function loadWishlist(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || []; }
  catch(e){ return []; }
}
export function saveWishlist(w){ localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(w)); }

export function loadOrders(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || []; }
  catch(e){ return []; }
}
export function saveOrders(o){ localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(o)); }

// helpers
export function findCartItem(cart, productId, variantKey){
  return cart.find(it => it.productId === productId && JSON.stringify(it.variant||{}) === JSON.stringify(variantKey||{}));
}
