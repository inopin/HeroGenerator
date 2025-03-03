import { defineStore } from 'pinia'
import { ref } from 'vue'
import { raceData } from './raceStore'

export const paramsData = defineStore('paramsData', () => {
    const raceStore = raceData()
    const defaultParamsList = [
        {
            id: 'dexterity',
            label: 'dexterity',
            labelTitle: 'ловкость',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
        {
            id: 'strength',
            label: 'strength',
            labelTitle: 'сила',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
        {
            id: 'brains',
            label: 'brains',
            labelTitle: 'смекалка',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
        {
            id: 'temper',
            label: 'temper',
            labelTitle: 'характер',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
        {
            id: 'stamina',
            label: 'stamina',
            labelTitle: 'выносливость',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
    ]

    const paramsList = ref([
        {
            id: 'dexterity',
            label: 'dexterity',
            labelTitle: 'ловкость',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
        {
            id: 'strength',
            label: 'strength',
            labelTitle: 'сила',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
        {
            id: 'brains',
            label: 'brains',
            labelTitle: 'смекалка',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
        {
            id: 'temper',
            label: 'temper',
            labelTitle: 'характер',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
        {
            id: 'stamina',
            label: 'stamina',
            labelTitle: 'выносливость',
            startValue: 4,
            minVal: 4,
            maxVal: 12,
        },
    ])

    raceStore.$subscribe((mutation, state) => {
        paramsList.value = defaultParamsList
        paramsList.value = mergeArrays(paramsList.value, state.chosenRace.raceFeatures)
    })

    function mergeArrays(defaultArr: any[], newArr: any[]) {
        return defaultArr.map((defaultItem) => {
            const newItem = newArr.find((p: { id: any }) => p.id === defaultItem.id)
            if (newItem) {
                return { ...defaultItem, ...newItem }
            }
            return defaultItem
        })
    }

    return {
        paramsList,
    }
})
// добавить лимит на изменение параметров
