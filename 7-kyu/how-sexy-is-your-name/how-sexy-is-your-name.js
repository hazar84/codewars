function sexyName(name) {
  // Приводим имя к верхнему регистру (так как SCORES содержит заглавные буквы)
  // и суммируем очки только для букв, игнорируя другие символы
  const score = name.toUpperCase().split('').reduce((acc, char) => {
    return acc + (SCORES[char] || 0);
  }, 0);
  
  // Определяем категорию по сумме очков
  if (score <= 60) return 'NOT TOO SEXY';
  if (score <= 300) return 'PRETTY SEXY';
  if (score <= 599) return 'VERY SEXY';
  return 'THE ULTIMATE SEXIEST';
}