import { css } from '@emotion/core'

/* user.html */
export const userStyle = css`
  .users-detail {
    display: flex;
    position: absolute;
    top: 20%;
    right: 0;
    left: 0;
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }

  .user-detail {
    position: relative;
    width: 50%;
    background: white;
  }

  .user-detail-text {
    padding-left: 10px;
    background: #00a0ce;
    color: white;
    font-size: large;
  }

  /* マーク */
  .user-detail-shape {
    position: relative;
    top: 5%;
    width: 100%;
  }

  .shape-text {
    height: 50px;
    padding-left: 10px;
  }

  .shape-default {
    display: flex;
    position: relative;
  }

  .shape-default-texts {
    position: absolute;
    left: 20%;
    width: 40%;
  }

  .shape-default-text {
    text-align: center;
  }

  .shape-default-value {
    text-align: center;
  }

  .shape-option {
    display: flex;
    position: relative;
    top: 75px;
  }

  .shape-option-texts {
    position: absolute;
    left: 20%;
    width: 40%;
  }

  .shape-option-text {
    text-align: center;
  }

  .shape-option-value {
    text-align: center;
  }

  /* マークの色 */
  .user-detail-color {
    position: absolute;
    top: 50%;
    width: 100%;
    padding-top: 5%;
    border-top: 1px dashed;
  }

  .color-texts {
    height: 50px;
    padding-left: 10px;
  }

  .color-default {
    display: flex;
    position: relative;
  }

  .color-default-texts {
    position: absolute;
    left: 20%;
    width: 40%;
  }

  .color-default-text {
    text-align: center;
  }

  .color-default-value {
    text-align: center;
  }

  .color-option {
    display: flex;
    position: relative;
    top: 75px;
  }

  .color-option-texts {
    position: absolute;
    left: 20%;
    width: 40%;
  }

  .color-option-text {
    text-align: center;
  }

  .color-option-value {
    text-align: center;
  }
`