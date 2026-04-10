function center (strng, width, fill = ' ') {
  const lg = strng.length;
  const min = width - lg;
  if (lg > width) {
    return strng
  } else if ((min) % 2 === 0) {
    strng = fill.repeat(min/2) + strng + fill.repeat(min/2)
  } else {
    strng = fill.repeat((min/2)+1) + strng + fill.repeat(min/2)
  }
  return strng;
}