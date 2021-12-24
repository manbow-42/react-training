import { css } from '@emotion/core'

export const squareStyle = css`
.board-row:after {
  clear: both;
  content: "";
  display: table;
}

.square {
  background: #fff;
  border: 1px solid black;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  cursor: pointer;
}

.back-orange {
  background: orange;
}

.back-purple {
  background: purple;
}

.back-green {
  background: green;
}

.font-red {
  color: red;
}

.font-blue {
  color: blue;
}

.font-yellow {
  color: yellow;
}

.square:focus {
  outline: none;
}

.kbd-navigation .square:focus {
  background: #ddd;
}
`