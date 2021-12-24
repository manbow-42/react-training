// 勝敗判定コンポーネント
function calculateWinner(squares: any[], matrixLines: number): boolean {
  const lines = [];
  
  sideWin(lines, matrixLines);
  verticalWin(lines, matrixLines);
  backSlash(lines, matrixLines);
  slash(lines, matrixLines);

  return winReturn(lines, matrixLines, squares);
}

// 横の勝利条件
function sideWin(lines: any[], matrixLines: number): void {
  for (let i = 0; i < matrixLines; i++) {
    let firstElement = i * matrixLines;
    let sideWin = [];
    for(let num = 0; num < matrixLines; num++) {
      sideWin.push(firstElement + num);
    }
    lines.push(sideWin);
  }
}

// 縦の勝利条件
function verticalWin(lines: any[], matrixLines: number): void {
  for (let i = 0; i < matrixLines; i++) {
    let firstElement = i;
    let verticalWin = [];
    for(let num = 0; num < matrixLines; num++) {
      verticalWin.push(firstElement + (matrixLines * num));
    }
    lines.push(verticalWin);
  }
}

// 斜めの勝利条件 1つ 左上から右下
function backSlash(lines: any[], matrixLines: number): void {
  let backSlash = [];
  for(let num = 0; num < matrixLines; num++) {
    backSlash.push((Number(matrixLines) + 1) * num);  //何故か2周目からString型になってしまうので強制的にNumber()する
  }
  lines.push(backSlash);
}

// 斜めの勝利条件 1つ 右上から左下
function slash(lines: any[], matrixLines: number): void {
  let slash = [];
  for(let num = 0; num < matrixLines; num++) {
    let firstElement = matrixLines - 1;
    slash.push(firstElement * (num + 1));
  }
  lines.push(slash);
}

// 一列揃った時点でreturn
function winReturn(lines: any[], matrixLines: number, squares: any[]): boolean {
  for (let i = 0; i < lines.length; i++) {
    let sameShape = 0;
    for(let num = 1; num < matrixLines; num++) {
      if (squares[lines[i][0]] && squares[lines[i][0]] === squares[lines[i][num]]) {
        sameShape++;
      }
    }
    if (sameShape === matrixLines - 1) {
      return squares[lines[i][0]];
    }
  }
}

export default calculateWinner