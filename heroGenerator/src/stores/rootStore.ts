import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Race } from '@/shared/api/types/serviceTypes'
import { Param } from '@/shared/api/types/serviceTypes'

export const useRootData = defineStore('useRootData', () => {
    // название через use
    const isLoading = ref(false)
    const error = ref<string | null>(null)
    const charRace = ref<Race[]>([])
    const charParams = ref<Param[]>([])
    const defaultParams = ref<Param[]>([])
    const chosenRace = ref<Race>({})
    const character = {
        charName: 'Джонни Гопстопкинс',
    }

    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        isLoading.value = true
        error.value = null
        console.log('start')
        try {
            const response = await fetch('../shared/api/mocks/characterMocks')
            if (!response.ok) {
                throw new Error('Failed to fetch users')
            }
            const data = await response.json()
            charRace.value = await data.races
            charParams.value = await data.params
            defaultParams.value = await data.params
            chosenRace.value = await charRace.value[0]
        } catch (err) {
            error.value = 'Failed to fetch users'
        } finally {
            isLoading.value = false
        }
    }

    const setRace = (incomingData: any) => {
        clearRace()
        chosenRace.value = incomingData
        setParams(chosenRace.value.features.paramsModify)
    }
    const clearRace = () => {
        chosenRace.value = charRace.value[0]
    }

    const setParams = (incomingArray: any) => {
        charParams.value = defaultParams.value
        if (incomingArray)  charParams.value = mergeArrays(charParams.value, incomingArray)
       

    }

    function mergeArrays(defaultArr: any[], newArr: any[]) {  //вынести в какие либо утилиты.
        return defaultArr.map((defaultItem) => {
            const newItem = newArr.find((p: { id: any }) => p.id === defaultItem.id)
            if (newItem) {
                return { ...defaultItem, ...newItem }
            }
            return defaultItem
        })
    }

    return {
        character,
        isLoading,
        error,
        fetchData,
        setRace,
        charRace,
        chosenRace,
        charParams,
    }
})
// собрать сторы в один   константы в корфиг
