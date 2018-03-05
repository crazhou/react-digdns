function reverseFor(s) {
  let len = s.length;
  let res = [];
  while (len--) {
    res.push(s.charAt(len));
  }
  return res.join("");
}

function reverseRe(s) {
  let len = s.length;
  if (len <= 1) {
    return s;
  } else {
    return s.slice(-1) + reverseRe(s.slice(0, len - 1));
  }
}

function reverseXor(s) {
  let arr = s.split("").map(x => x.charCodeAt(0));
  let len = arr.length - 1;
  console.log("Arr->", arr, len);
  for (let i = 0; i < len; i++, len--) {
    arr[i] ^= arr[len];
    arr[len] ^= arr[i];
    arr[i] ^= arr[len];
  }

  return String.fromCharCode(...arr);
}
