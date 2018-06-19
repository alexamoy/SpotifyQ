function decodeString(s){
  let repetitions = s[0];
  let outputStr = '';
  for (var i=2; i<s.length; i++){
    if (s[i] === ']' || s[i] ==='['){
      break;
    } else if (Number(s[i])){
      outputStr += decodeString(s.slice(i));
    } else {
      outputStr += s[i];
    }
  }
  return outputStr.repeat(repetitions);
}

module.exports = decodeString;
