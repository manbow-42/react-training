import React from 'react'
import Square from './square'
import { squareStyle } from '../../styles/games/squareStyle';

type BoardProps = {
  squares: (string | null)[]
  user1Shape: string
  user1FontColor: string
  user2Shape: string
  user2FontColor: string
  backColor: string
  matrixLines: number
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

class Board extends React.Component<BoardProps> {
  renderSquare(i: number) {
    // 自分と相手のマークの色
    let fontColor: string;
    let currentShape = this.props.squares[i];
    switch(currentShape) {
      case this.props.user1Shape:
        fontColor = `font-${this.props.user1FontColor}`;  //user1のマークの色が変わったらクラス名挿入
        break;
      case this.props.user2Shape:
        fontColor = `font-${this.props.user2FontColor}`;  //user2のマークの色が変わったらクラス名挿入
        break;
      default:
        fontColor = '';
        break;
    }

    return(
      <Square 
        key={i}
        value={this.props.squares[i]} 
        backColor={this.props.backColor}
        fontColor={fontColor}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {

    let x = this.props.matrixLines;
    let allSquares = [];  //全てのSquareを入れる箱
    let tempSquares = []; //一時的に全てのSquareを入れる箱 後でそれらを行ごとの配列に入れる

    for(let i = 0; i < x ** 2; i++) {
      tempSquares.push(this.renderSquare(i));  //一時的に全てのSquareを入れていく x=4なら、4x4でsquareが16個必要
    }

    for(let i = 0; i < x; i++) {
      let lineSquares = [];                   //行ごとのSquaresを入れる箱
      for(let num = 0; num < x; num++) {      //1行につきx個入る
        let firstline = tempSquares.shift();  //最初の要素を取り出して
        lineSquares.push(firstline);          //lineSquaresに入れていく
      }
      let boardDiv = <div className="board-row" key={i}>{lineSquares}</div>;  //行の出来上がり
      allSquares.push(boardDiv);  //1行ずつ入れる
    }

    return (
      <div css={squareStyle}>
        {allSquares}
      </div>
    );
  }
}

export default Board