import React, { ReactNode, useEffect } from 'react'
import Link from 'next/link'
import Board from './board'
import Information from './information'
import User1 from './user1'
import User2 from './user2'
import calculateWinner from './calculateWinner'
import { observer } from 'mobx-react'
import gameStore from '../../store/store'
import { gameStyle } from '../../styles/games/gameStyle'

const Game = observer(() => {
  const history = gameStore.history
  const current = history[gameStore.stepNumber];
  const winner = calculateWinner(current.squares, gameStore.matrixLines);
  
  let moves = history.map((step: number, move: number) => {
    let desc: string;
    if ((move % 2) === 0) {
      desc = (move + 2) / 2 + '手目を打ち直す';  // user1の手順
    } else {
      desc = (move + 1) / 2 + '手目を打ち直す';  // user2の手順
    }
    return (
      <li key={move}>
        <button onClick={() => gameStore.jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  
  let status: string;
  let winColor: {color: string};
  if (winner) {
    status = (winner === gameStore.userInfo[0].user1Shape ? 'user1' : 'user2') + 'の勝ち！';
    winColor = {color: "red"};  //勝ったら赤くする
  } else {
    status = (gameStore.xIsNext ? 'user1' : 'user2') + 'の番です';
  }

  const userInfo = gameStore.userInfo
  const user1Info = userInfo[0]
  const user1Shape = user1Info.user1Shape
  const user1FontColor = user1Info.user1FontColor
  const user2Info = userInfo[1]
  const user2Shape = user2Info.user2Shape
  const user2FontColor = user2Info.user2FontColor

  return (
    <>
      <Link href="/dashboard">
        <a className="to-cms">
          CMSはこちら
        </a>
      </Link>
      <div css={gameStyle} className="game">
        <User1 />
        <div className="game-board">
          <p 
            className="status-text"
            style={winColor}
            >
          {status}
          </p>
          <div className="board">
            <Board 
              squares={current.squares}
              onClick={(i) => gameStore.handleClick(i)}
              matrixLines={gameStore.matrixLines}
              user1Shape={user1Shape}
              user1FontColor={user1FontColor}
              user2Shape={user2Shape}
              user2FontColor={user2FontColor}
              backColor={gameStore.backColor}
              />
          </div>
          <Information />
        </div>
        <User2 />
      </div>
      <style jsx>
        {`
          .to-cms {
            position: absolute;
            top: 0;
            right: 0;
            color: black;
            text-decoration: none;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
})

export default Game