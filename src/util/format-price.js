export function formatPrice(priceStr) {
  return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
