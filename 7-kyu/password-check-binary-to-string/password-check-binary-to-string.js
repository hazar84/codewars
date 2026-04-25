function decodePass( passArr, bin ){
  const pass =  bin.split(' ').map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
  const access = passArr.find(item => item === pass);
  
  return access !== undefined ? access : false;
}