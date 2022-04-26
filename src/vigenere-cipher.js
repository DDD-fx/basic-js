const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(bool = true) {              //если undefined, то true
    this.direct = bool;

  }
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  prepareValidKey (str, key) {
    key = key.toUpperCase();
    let strArr = str.split("").filter(el => this.alphabet.includes(el));    //создать массив без пробелов и символов
    let strValidLength = strArr.length;         //определить длину массива без пробелов и символов
    let keyToAdd = strValidLength - key.length; //определить, на какую длину увеличить ключ
    return  keyToAdd > 0 ?
        key.repeat(strValidLength/key.length) + key.slice(0, Math.ceil(strValidLength%key.length)) : key; //repeat округляет вниз
  }

  encrypt(str, key) {
    if (!str || !key){
      throw new Error("Incorrect arguments!")
    }
    str = str.toUpperCase();
    let arr = [];           //result
    let validKeyIndex = -1;             // индекс для ключа должен отставать от индекса строки на количество пробелов и символов
    let validKey = this.prepareValidKey(str, key);

    for (let i=0; i<str.length; i++){
      if (this.alphabet.includes(str[i])){
        ++validKeyIndex;                   //(номер буквы слова + номер буквы ключа) по модулю длины алфавита
        let encryptedCharCode = ((this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(validKey[validKeyIndex])) %this.alphabet.length);
        encryptedCharCode < 0 ? encryptedCharCode = this.alphabet.length + encryptedCharCode : encryptedCharCode;
        arr.push(this.alphabet[encryptedCharCode]);   //если значение encryptedCharCode отрицательное, отсчитать с конца алфавита
      }else {
        arr.push(str[i]);           //при пуше символов и пробелов, индекс строки увеличится, индекс ключа - нет
      }
    }
    return this.direct ? arr.join("") : arr.reverse().join("")
  }
  decrypt(str, key) {
    if (!str || !key){
      throw new Error("Incorrect arguments!")
    }
    str = str.toUpperCase();
    let arr = [];
    let validKeyIndex = -1;
    let validKey = this.prepareValidKey(str, key);

    for (let i=0; i<str.length; i++){
      if (this.alphabet.includes(str[i])){
        ++validKeyIndex;
        let decryptedCharCode = ((this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(validKey[validKeyIndex])) %this.alphabet.length);
        decryptedCharCode < 0 ? decryptedCharCode = this.alphabet.length + decryptedCharCode : decryptedCharCode;
        arr.push(this.alphabet[decryptedCharCode]);
      }else {
        arr.push(str[i]);
      }
    }
    return this.direct ? arr.join("") : arr.reverse().join("")
  }
}

module.exports = {
  VigenereCipheringMachine
};
