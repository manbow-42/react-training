import Sidebar from '../components/cms/sidebar'
import { matrixStyles } from '../styles/cms/matrixStyle'

export default () => (
  <>
    <Sidebar />
    <div css={matrixStyles} className="main">
      <div className="matrix-detail">
        <p className="matrix-text">行列の数</p>
        <div className="matrix-default">
          <div className="matrix-default-texts">
            <p className="matrix-default-text">デフォルト</p>
            <p className="matrix-default-value">3x3</p>
          </div>
          <button type="button" className="edit-default">変更</button>
        </div>
        <div className="matrix-option">
          <div className="matrix-option-texts">
            <p className="matrix-option-text">選択肢</p>
            <p className="matrix-option-value">3x3 4x4 5x5 6x6</p>
          </div>
          <button type="button" className="edit-option">変更</button>
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        #matrix {
          background: #00a0ce;
        }
      `}
    </style>
  </>
)