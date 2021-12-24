import * as React from 'react'
import Game from '../components/games/game'
import fetch from 'isomorphic-unfetch'
import gameStore from '../store/store'
import { observer } from 'mobx-react'

type apiProps = {
  apiMatrix: number
  apiBackColor: string
  user: [
    {
      shape: string
      color: string
    },
    {
      shape: string
      color: string
    }
  ]
}

const Index = observer((props: apiProps) => {
  React.useEffect(() => {
    gameStore.apiSetting(props.apiMatrix, props.apiBackColor, props.user)
  })

  return (
    <Game />
  )
})

Index.getInitialProps = async function () {
  const matrixApi = await fetch('http://localhost:3001/api/v1/matrix')
  const backColorApi = await fetch('http://localhost:3001/api/v1/backColor')
  const userApi = await fetch('http://localhost:3001/api/v1/user')

  const matrix = await matrixApi.json()
  const backColor = await backColorApi.json()
  const user = await userApi.json()
  const user1Shape = user[0].shape
  const user1Color = user[0].color
  const user2Shape = user[1].shape
  const user2Color= user[1].color
  
  return {
    apiMatrix: matrix[0].lines,
    apiBackColor: backColor[0].color,
    user: user
  }
}

export default Index