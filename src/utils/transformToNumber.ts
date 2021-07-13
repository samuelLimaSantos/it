export function transformToNumber(moneyString: string) {
  moneyString = moneyString === 'Gratuito p/ jogar' ? 'R$ 0' : moneyString;
  const onlyNumbers = + moneyString.split(' ')[1].replace(',', '.');

  return onlyNumbers;
}