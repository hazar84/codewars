function getCount(str) {
  return str.split("").filter(char => 'aeiou'.includes(char)).length
}