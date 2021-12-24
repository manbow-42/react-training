import Sidebar from '../components/cms/sidebar'
import Link from 'next/link'
import { dashboardStyle } from '../styles/cms/dashboardStyle'

export default () => (
  <>
    <Sidebar />
    <div css={dashboardStyle} className="main">
      <Link href="/">
        <a className="to-game">
          Gameに戻る
        </a>
      </Link>
      <div className="matrix">
        <Link href="/matrixLines">
          <a className="category-text">行列の数</a>
        </Link>
        <p className="info-text">3x3</p>
      </div>
      <div className="background-color">
        <Link href="/backColor">
          <a className="category-text">背景色</a>
        </Link>
        <p className="info-text">白</p>
      </div>
      <div className="dashboard-users">
        <Link href="/user">
          <a className="category-text">ユーザー</a>
        </Link>
        <div className="users">
          <div className="user right-border">
            <p className="user-text">user1</p>
            <div className="user-shape">マーク：○</div>
            <div className="user-color">色：黒</div>
          </div>
          <div className="user">
            <p className="user-text">user2</p>
            <div className="user-shape">マーク：✕</div>
            <div className="user-color">色：黒</div>
          </div>
        </div>
      </div>
    </div>
    <style jsx global>
      {`
        #dashboard {
          background:#00a0ce;
        }
      `}
    </style>
  </>
)