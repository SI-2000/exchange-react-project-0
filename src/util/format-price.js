export function formatPrice(priceStr) {
  return priceStr.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
