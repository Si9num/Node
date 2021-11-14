const mod = require('./mod');

function atbash(word) {
  let res = [];
  let newres = [];
  let ress = [];
  word = word.split('');
  for (let i = 0; i < word.length; i += 1) {
    res.push(word[i].charCodeAt(0));

    if (res[i] > 64 && res[i] < 91) {
      ress.push(mod(-res[i], 90) + 65);
    } else if (res[i] > 96 && res[i] < 123) {
      ress.push(mod(-res[i], 122) + 97);
    } else {
      ress.push(res[i]);
    }
  }
  for (let i = 0; i < word.length; i += 1) {
    newres.push(String.fromCharCode(ress[i]));
  }

  return `${newres.join('')}  `;
}
