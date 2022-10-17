export class MoneyHelper {
  static getMoney(value: number, withCurrency?: boolean, moneyType = 'pt-br') {
    if (isNaN(value)) return '';

    if (withCurrency) {
      return value.toLocaleString(moneyType, {
        style: 'currency',
        currency: 'BRL',
      });
    }

    return value.toLocaleString(moneyType, { minimumFractionDigits: 2 });
  }
}
