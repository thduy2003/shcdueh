export function caculatateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < lines.length; index++) {
    // destructuring array , gán 3 số của mảng trong lines vào 3 biến a,b,c
    const [a, b, c] = lines[index];
    // cells[a] tức là ô thứ a trong bảng , nếu là ô a và ô a = ô b và ô a = ô c thì trả về a, còn không thì null
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}
