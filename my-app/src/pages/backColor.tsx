import Sidebar from '../components/cms/sidebar'
import { backColorStyle } from '../styles/cms/backColorStyle'

export default () => (
  <>
    <Sidebar />
    <div css={backColorStyle} className="main">
      <div className="back-color-detail">
        <p className="back-color-text">背景色</p>
        <div className="back-color-default">
          <div className="back-color-default-texts">
            <p className="back-color-default-text">デフォルト</p>
            <p className="back-color-default-value">白</p>
          </div>
          <button type="button" className="edit-default">変更</button>
        </div>
        <div className="back-color-option">
          <div className="back-color-option-texts">
            <p className="back-color-option-text">選択肢</p>
            <p className="back-color-option-value">白・紫・橙・緑</p>
          </div>
          <button type="button" className="edit-option">変更</button>
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        #back-color {
          background:#00a0ce;
        }
      `}
    </style>
  </>
)