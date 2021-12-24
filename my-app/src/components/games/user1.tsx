import { observer } from 'mobx-react'
import gameStore from '../../store/store'
import { user1Style } from '../../styles/games/user1Style'

//user1の詳細コンポーネント
const User1 = observer(() => {
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

  let user1Moves = [];  //user1の手順だけを入れる箱
  for (let i = 0; i < moves.length - 1; i++) {
    if ((i % 2) === 0) {
      user1Moves.push(moves[i]);  //user1の手順だけ入れる
    }
  }

  return (
    <div css={user1Style} className="user1">
      <p className="user1-text">user1</p>
      <div className="user1-info">
        <p>マーク</p>
        <select 
          onChange={gameStore.changeUser1Shape}
          disabled={gameStore.infoDisabled}
          value={gameStore.userInfo[0].user1Shape}
          >
          <option value="◯">◯</option>
          <option value="✕">✕</option>
          <option value="☆">☆</option>
          <option value="♡">♡</option>
          <option value="♢">♢</option>
        </select>
        <p className="color-text">色</p>
        <select 
          onChange={gameStore.changeUser1FontColor}
          disabled={gameStore.infoDisabled}
          value={gameStore.userInfo[0].user1FontColor}
          >
          <option value="black">黒</option>
          <option value="red">赤</option>
          <option value="blue">青</option>
          <option value="yellow">黃</option>
        </select>
      </div>
      <ul>{user1Moves}</ul>
    </div>
  );
})

export default User1