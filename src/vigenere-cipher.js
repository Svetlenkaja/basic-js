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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
      return this.transform(message, key, true);
    }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!"); 
      return this.transform(encryptedMessage, key, false);
  }

  transform(text, key, isEncrypt) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const transformedText = [];
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charUpperCase = char.toUpperCase();
        
        if (alphabet.includes(charUpperCase)) {
            const charIndex = alphabet.indexOf(charUpperCase);
            const keyChar = key[keyIndex % key.length].toUpperCase();
            const keyCharIndex = alphabet.indexOf(keyChar);
            
            let newIndex = isEncrypt
                ? (charIndex + keyCharIndex) % alphabet.length
                : (charIndex - keyCharIndex + alphabet.length) % alphabet.length;
                
            transformedText.push(alphabet[newIndex]);
            keyIndex++;
        } else {
            transformedText.push(char);
        }
    }

    return this.isDirect
        ? transformedText.join('')
        : transformedText.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
