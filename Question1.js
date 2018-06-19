function sortByStrings(s,t){
  let outputStr = '';
  for (let i=0; i<t.length; i++){
    for (let j=0; j<s.length; j++){
      if (t[i]===s[j]){
        outputStr += s[j];
      }
    }
  }
  return outputStr;
}

module.exports = sortByStrings;
