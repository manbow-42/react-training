import { css } from '@emotion/core'

/* index.html */
export const dashboardStyle = css`
  .matrix {
    position: relative;
    top: 10%;
    width: 10%;
    height: 10%;
    margin-left: 30%;
    background: white;
  }

  .background-color {
    position: relative;
    top: 15%;
    width: 10%;
    height: 10%;
    margin-left: 30%;
    background: white;
  }

  .category-text {
    display: inline-block;
    width: 100%;
    padding-left: 10px;
    background: #00a0ce;
    color: white;
    font-size: large;
    text-decoration: none;
  }

  .info-text {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 25px;
    text-align: center;
  }

  .dashboard-users {
    position: absolute;
    top: 45%;
    right: 0;
    left: 0;
    width: 40%;
    height: 25%;
    margin: 0 auto;
  }

  .users {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .user {
    position: relative;
    width: 50%;
    height: 100%;
    background: white;
  }

  .user-text {
    padding-left: 10px;
  }

  .user-shape {
    position: absolute;
    top: 30%;
    width: 100%;
    text-align: center;
  }

  .user-color {
    position: absolute;
    top: 60%;
    width: 100%;
    text-align: center;
  }
`