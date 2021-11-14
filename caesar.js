function caesar(word, par) {
  let res = [];
  let newres = [];
  let ress = [];
  word = word.split('');
  if (par === 1) {
    for (let i = 0; i < word.length; i += 1) {
      res.push(word[i].charCodeAt(0));

      if ((res[i] > 64 && res[i] < 90) || (res[i] > 96 && res[i] < 122)) {
        ress.push(res[i] - 1);
      } else if (res[i] === 65 || res[i] === 97) {
        ress.push(res[i] + 25);
      } else {
        ress.push(res[i]);
      }
    }

    for (let i = 0; i < word.length; i += 1) {
      newres.push(String.fromCharCode(ress[i]));
    }
    for (let i = 0; i < newres.length; i += 1) {
      if (
        (newres[i].charCodeAt(0) < 65 && newres[i].charCodeAt(0) > 63) ||
        (newres[i].charCodeAt(0) < 97 && newres[i].charCodeAt(0) > 95)
      ) {
        newres[i] = `${newres[i].charCodeAt(0) + 26}`;
        newres[i] = `${String.fromCharCode(newres[i])}`;
      }
    }
    return `${newres.join('')}  `;
  }
  if (par === 0) {
    for (let i = 0; i < word.length; i += 1) {
      res.push(word[i].charCodeAt(0));

      if ((res[i] > 64 && res[i] < 90) || (res[i] > 96 && res[i] < 122)) {
        ress.push(res[i] + 1);
      } else if (res[i] === 90 || res[i] === 122) {
        ress.push(res[i] - 25);
      } else {
        ress.push(res[i]);
      }
    }

    for (let i = 0; i < word.length; i += 1) {
      newres.push(String.fromCharCode(ress[i]));
    }

    return `${newres.join('')}  `;
  }
}
module.exports = caesar;
