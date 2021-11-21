function rot(word, par) {
  let res = [];
  let newres = [];
  let ress = [];
  word = word.split('');
  if (par === 1) {
    for (let i = 0; i < word.length; i += 1) {
      res.push(word[i].charCodeAt(0));

      if ((res[i] > 64 && res[i] < 83) || (res[i] > 96 && res[i] < 115)) {
        ress.push(res[i] + 8);
      } else if (
        (res[i] > 82 && res[i] < 91) ||
        (res[i] > 114 && res[i] < 123)
      ) {
        ress.push(res[i] - 18);
      } else {
        ress.push(res[i]);
      }
    }

    for (let i = 0; i < word.length; i += 1) {
      newres.push(String.fromCharCode(ress[i]));
    }
  }
  if (par === 0) {
    for (let i = 0; i < word.length; i += 1) {
      res.push(word[i].charCodeAt(0));

      if ((res[i] > 72 && res[i] < 91) || (res[i] > 104 && res[i] < 123)) {
        ress.push(res[i] - 8);
      } else if (
        (res[i] > 64 && res[i] < 73) ||
        (res[i] > 96 && res[i] < 105)
      ) {
        ress.push(res[i] + 18);
      } else {
        ress.push(res[i]);
      }
    }

    for (let i = 0; i < word.length; i += 1) {
      newres.push(String.fromCharCode(ress[i]));
    }
  }
  return `${newres.join('')}  `;
}

module.exports = rot;
