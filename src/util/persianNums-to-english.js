const persianNumsToEnglish = (str) => {
  let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  let englishDigits = "0123456789";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    let index = persianDigits.indexOf(ch);
    if (index >= 0) {
      result += englishDigits.charAt(index);
    } else {
      result += ch;
    }
  }

  return result;
};

export default persianNumsToEnglish;
