import { css } from '@emotion/core'

export const gameStyle = css`
  width: 100%;
  position: absolute;
  top: 5%;
  display: flex;
  justify-content: center;

  .game-board {
    margin: 0 50px;
  }

  .status-text {
    text-align: center;
    height: 21px;
  }

  .board {
    height: 198px;
    width: 198px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`