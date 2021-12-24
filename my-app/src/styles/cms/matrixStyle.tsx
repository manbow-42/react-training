import { css } from '@emotion/core'

/* matrix.html */
export const matrixStyles = css`
  .matrix-detail{
    position: relative;
    top: 20%;
    width: 25%;
    height: 40%;
    margin: 0 auto;
    background: white;
  }

  .matrix-text {
    padding-left: 10px;
    background: #00a0ce;
    color: white;
    font-size: large;
  }
  
  .matrix-default {
    display: flex;
    position: relative;
    top: 20%;
  }
  
  .matrix-default-texts {
    position: absolute;
    left: 20%;
    width: 40%;
  }
  
  .matrix-default-text {
    text-align: center;
  }
  
  .matrix-default-value {
    text-align: center;
  }
  
  .matrix-option {
    display: flex;
    position: relative;
    top: 55%;
    width: 100%;
  }
  
  .matrix-option-texts {
    position: absolute;
    left: 20%;
    width: 40%;
  }
  
  .matrix-option-text {
    text-align: center;
  }
  
  .matrix-option-value {
    text-align: center;
  }
`