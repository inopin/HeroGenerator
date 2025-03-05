import { defineStore } from 'pinia'
import { raceData } from './raceStore'
import { paramsData } from './parametrsStore'

export const rootData = defineStore('rootData', () => {
    // название через use
    const character = {
        charName: 'Джонни Гопстопкинс',
        charRace: raceData(),
        charParams: paramsData(),
    }
    // const characterName: string = 'Джонни Гопстопкинс'
    // const characterRace = raceData()
    // const characterParams = paramsData()

    return {
        // characterName,
        // characterRace,
        // characterParams,
        character,
    }
})
// собрать сторы в один   константы в корфиг
// сделать моки для сервера
