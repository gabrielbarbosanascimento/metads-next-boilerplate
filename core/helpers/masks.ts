export class MasksHelper {
  static phone = (rawValue: string) => {
    var numbers = rawValue.match(/\d/g);
    var numberLength = 0;
    if (numbers) {
        numberLength = numbers.join('').length;
    }
    if (numberLength < 11) {
        return [
            '(', /[1-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/
        ];
    } else {
        return [
            '(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/
        ];
    }
  }

  static phoneDDI = (rawValue: string) => {
    var numbers = rawValue.match(/\d/g);
    var numberLength = 0;
    if (numbers) {
        numberLength = numbers.join('').length;
    }
    if (numberLength < 13) {
        return [
            '+', /[1-9]/, /[1-9]/, ' ', '(', /[1-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/
        ];
    } else {
        return [
            '+', /[1-9]/, /[1-9]/, ' ', '(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/
        ];
    }
  }

  static cnpj = [
    /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', '0', '0', '0', '1', '-', /\d/, /\d/
  ];

  static cpf = [
    /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/
  ];

  static rg = [
    /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /[a-zA-Z0-9_.-]/, /[a-zA-Z0-9_.-]/
  ];

  static cep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  static contaBancaria = [
    /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/
  ];

  static agenciaBancaria = [
    /\d/, /\d/, /\d/, /\d/, '-', /\d/
  ];

}



