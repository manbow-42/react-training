import { observer } from 'mobx-react'
import gameStore from '../../store/store'
import { informationStyle } from '../../styles/games/informationStyle'

//行・列の数と盤面の色を決めるコンポーネント
const Information = observer(() => {
  return (
    <div css={informationStyle} className="information">
      <div className="board-lines-select">
        <span>行・列の数</span>
        <select
          className="lines-select-box"
          onChange={gameStore.changeMatrixLines}
          disabled={gameStore.infoDisabled}
          value={gameStore.matrixLines}
        >
          <option value="3">３</option>
          <option value="4">４</option>
          <option value="5">５</option>
          <option value="6">６</option>
        </select>
      </div>
      <div className="board-color-select">
        <span>盤面の色</span>
        <select
          className="back-color-select-box"
          onChange={gameStore.changeBackColor}
          disabled={gameStore.infoDisabled}
          value={gameStore.backColor}
        >
          <option value="">白</option>
          <option value="back-purple">紫</option>
          <option value="back-orange">橙</option>
          <option value="back-green">緑</option>
        </select>
      </div>
    </div>
  );
})

export default Information