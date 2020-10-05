const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
// 10 - .
// 11 - -


function decode(expr) {
    let str='';
    let res = '';
    
    while (expr.length > 0){
        str = expr.substring(0, 10).replace(/00/g,'').replace(/10/g,'.').replace(/11/g,'-')
        expr = expr.substring(10, expr.length);

        if (str=='**********'){
            res = res + ' ';
        }else{
            res = res +   MORSE_TABLE[str]
        }


    }

    return res;

}

module.exports = {
    decode
}