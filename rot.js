function rot(word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz') {
  let res = [];
  let newres = [];
  let ress = [];
  word = word.split('');
  for (let i = 0; i < word.length; i += 1) {
    res.push(word[i].charCodeAt(0));

    if ((res[i] > 64 && res[i] < 91) || (res[i] > 96 && res[i] < 123)) {
      ress.push(res[i] + 8);
    } else {
      ress.push(res[i]);
    }
  }

  for (let i = 0; i < word.length; i += 1) {
    newres.push(String.fromCharCode(ress[i]));
  }
  for (let i = 0; i < newres.length; i += 1) {
    if (
      (newres[i].charCodeAt(0) < 100 && newres[i].charCodeAt(0) > 90) ||
      (newres[i].charCodeAt(0) < 131 && newres[i].charCodeAt(0) > 122)
    ) {
      newres[i] = `${newres[i].charCodeAt(0) - 26}`;
      newres[i] = `${String.fromCharCode(newres[i])}`;
    }
  }
  return newres.join('');
}
console.log(rot());
