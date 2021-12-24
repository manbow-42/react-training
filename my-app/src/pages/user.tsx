import Sindebar from '../components/cms/sidebar'
import { userStyle } from '../styles/cms/userStyle'

export default () => (
  <>
    <Sindebar />
    <div css={userStyle} className="main">
      <div className="users-detail">
        <div className="user-detail right-border">
          <p className="user-detail-text">user1</p>
          <div className="user-detail-shape">
            <p className="shape-text">マーク</p>
            <div className="shape-default">
              <div className="shape-default-texts">
                <p className="shape-default-text">デフォルト</p>
                <p className="shape-default-value">○</p>
              </div>
              <button type="button" className="edit-default">変更</button>
            </div>
            <div className="shape-option">
              <div className="shape-option-texts">
                <p className="shape-option-text">選択肢</p>
                <p className="shape-option-value">○ ✕ ☆ ♡ ♢</p>
              </div>
              <button type="button" className="edit-option">変更</button>
            </div>
          </div>
          <div className="user-detail-color">
            <p className="color-texts">色</p>
            <div className="color-default">
              <div className="color-default-texts">
                <p className="color-default-text">デフォルト</p>
                <p className="color-default-value">黒</p>
              </div>
              <button className="edit-default">変更</button>
            </div>
            <div className="color-option">
              <div className="color-option-texts">
                <p className="color-option-text">選択肢</p>
                <p className="color-option-value">黒・赤・青・黃</p>
              </div>
              <button type="button" className="edit-option">変更</button>
            </div>
          </div>
        </div>
        <div className="user-detail">
          <p className="user-detail-text">user2</p>
          <div className="user-detail-shape">
            <p className="shape-text">マーク</p>
            <div className="shape-default">
              <div className="shape-default-texts">
                <p className="shape-default-text">デフォルト</p>
                <p className="shape-default-value">○</p>
              </div>
              <button type="button" className="edit-default">変更</button>
            </div>
            <div className="shape-option">
              <div className="shape-option-texts">
                <p className="shape-option-text">選択肢</p>
                <p className="shape-option-value">○ ✕ ☆ ♡ ♢</p>
              </div>
              <button type="button" className="edit-option">変更</button>
            </div>
          </div>
          <div className="user-detail-color">
            <p className="color-texts">色</p>
            <div className="color-default">
              <div className="color-default-texts">
                <p className="color-default-text">デフォルト</p>
                <p className="color-default-value">黒</p>
              </div>
              <button className="edit-default">変更</button>
            </div>
            <div className="color-option">
              <div className="color-option-texts">
                <p className="color-option-text">選択肢</p>
                <p className="color-option-value">黒・赤・青・黃</p>
              </div>
              <button type="button" className="edit-option">変更</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        #user {
          background:#00a0ce;
        }
      `}
    </style>
  </>
)