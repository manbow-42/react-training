import Link from 'next/link'

export default () => (
  <div className="side-menu">
    <Link href="/dashboard">
      <a className="side-link" id="dashboard">
        ダッシュボード
      </a>
    </Link>
    <div className="side-links">
      <Link href="/matrixLines">
        <a className="side-link" id="matrix">
          行列の数
        </a>
      </Link>
      <Link href="/backColor">
        <a className="side-link" id="back-color">
          背景色
        </a>
      </Link>
      <Link href="/user">
        <a className="side-link" id="user">
          ユーザー
        </a>
      </Link>
    </div>
  </div>
)