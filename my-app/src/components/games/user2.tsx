import { observer } from 'mobx-react'
import gameStore from '../../store/store'
import { user2Style } from '../../styles/games/user2Style'

//user2の詳細コンポーネント
const User2 = observer(() => {
  const history = gameStore.history

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

  let user2Moves = [];  //user2の手順だけを入れる箱
  for (let i = 0; i < moves.length - 1; i++) {
    if ((i % 2) !== 0) {
      user2Moves.push(moves[i]);  //user2の手順だけ入れる
    }
  }

  return (
    <div css={user2Style} className="user2">
      <p className="user2-text">user2</p>
      <div className="user2-info">
        <p>マーク</p>
        <select 
          onChange={gameStore.changeUser2Shape}
          disabled={gameStore.infoDisabled}
          value={gameStore.userInfo[1].user2Shape}
        >
          <option value="◯">◯</option>
          <option value="✕">✕</option>
          <option value="☆">☆</option>
          <option value="♡">♡</option>
          <option value="♢">♢</option>
        </select>
        <p className="color-text">色</p>
        <select 
          onChange={gameStore.changeUser2FontColor}
          disabled={gameStore.infoDisabled}
          value={gameStore.userInfo[1].user2FontColor}
        >
          <option value="black">黒</option>
          <option value="red">赤</option>
          <option value="blue">青</option>
          <option value="yellow">黃</option>
        </select>
      </div>
      <ul>{user2Moves}</ul>
    </div>
  );
})

export default User2