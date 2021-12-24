import GameStore from "./GameStore"
import { configure } from 'mobx'

configure({ enforceActions: 'always' })

const gameStore = new GameStore()

export default gameStore