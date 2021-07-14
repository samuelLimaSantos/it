export function formatPrice (price: number) {

  let priceString = price.toString();

  if (priceString.includes('.')) {
    const [ reals, cents ] = priceString.replace('.', ',').split(',');

    return `R$ ${reals},${cents.slice(0, 2)}`;
  }

  return `R$ ${priceString},00`
}