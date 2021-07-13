export function formatPrice (price: number) {

  let priceString = price.toString();

  if (priceString.includes('.')) {
    return `R$ ${priceString.replace('.', ',')}`;
  }

  return `R$ ${priceString},00`
}