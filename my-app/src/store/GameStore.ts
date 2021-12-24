import { observable, action } from 'mobx'
import calculateWinner from '../components/games/calculateWinner'

class GameStore {
  @observable matrixLines = 3 
  @observable stepNumber = 0
  @observable xIsNext = true
  @observable backColor = ''
  @observable infoDisabled = false
  @observable history = [{
    squares: Array(9).fill(null)
  }]
  @observable userInfo = [
    {
      user1Shape: '◯',
      user1FontColor: 'black',
    },
    {
      user2Shape: '✕',
      user2FontColor: 'black',
    }
  ]

  @action.bound
  handleClick(i: number) {
    const history = this.history.slice(0, this.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, this.matrixLines) || squares[i]) {
      return;
    }
    squares[i] = (this.xIsNext ? this.userInfo[0].user1Shape : this.userInfo[1].user2Shape)  //userごとの形の切り替え
    this.history = this.history.concat([{
        squares: squares
    }])
    this.stepNumber = history.length
    this.xIsNext = !this.xIsNext
    this.infoDisabled = true  //1手目以降、各フォームをdisabled=trueにする
  }
  
  @action.bound
  jumpTo(step: number) {
      this.stepNumber = step,
        this.xIsNext = ((step % 2) === 0)
  }
  
  // 行・列の数を変えるメソッド
  @action.bound
  changeMatrixLines(event) {
    let doubleMatrixLines = event.target.value ** 2;
      this.matrixLines = event.target.value,
      this.history = [{
        squares: Array(doubleMatrixLines).fill(null),  //行・列の数の二乗が配列の数になる
      }]
  }
  
  //盤面の色を変えるメソッド
  @action.bound
  changeBackColor(event) {
      this.backColor = event.target.value
  }
  
  // user1のマークを変えるメソッド
  @action.bound
  changeUser1Shape(event) {
    if (event.target.value === this.userInfo[1].user2Shape) {
      alert("マークが被っています")  //マークが被ったらアラート
    };
    const changedState = [...this.userInfo];
    changedState[0].user1Shape = event.target.value;
    this.userInfo = changedState
  }
  
  // user1のマークの色を変えるメソッド
  @action.bound
  changeUser1FontColor(event) {
    const changedState = [...this.userInfo];
    changedState[0].user1FontColor = event.target.value;
    this.userInfo = changedState
  }
  
  // user2のマークを変えるメソッド
  @action.bound
  changeUser2Shape(event) {
    if (event.target.value === this.userInfo[0].user1Shape) {
      alert("マークが被っています")  //マークが被ったらアラート
    }
    const changedState = [...this.userInfo];
    changedState[1].user2Shape = event.target.value;
    this.userInfo = changedState
  }
  
  // user2のマークの色を変えるメソッド
  @action.bound
  changeUser2FontColor(event) {
    const changedState = [...this.userInfo];
    changedState[1].user2FontColor = event.target.value;
    this.userInfo = changedState
  }
    
  // APIから値を取得して初期設定をする
  @action.bound
  apiSetting(matrixApi: number, colorApi: string, user: any) {
    this.matrixLines = matrixApi
    this.backColor = colorApi
    this.userInfo[0].user1Shape = user[0].shape
    this.userInfo[0].user1FontColor  = user[0].color
    this.userInfo[1].user2Shape = user[1].shape
    this.userInfo[1].user2FontColor  = user[1].color
  }
}

export default GameStore