import { defineStore } from 'pinia'
import { ref } from 'vue'

export const raceData = defineStore('raceData', () => {
    const raceList = [
        {
            label: 'Человек',
            id: 'human',
            description:
                'В большинстве фэнтези миров люди получают традиционное преимущество в виде одной бесплатной черты на выбор. Данная особенность отражает их способность к адаптации, отличающую людей от представителей иных рас.',
            src: 'src/assets/imgs/human.png',
            raceFeatures: [{ perks: 1 }],
        },
        {
            label: 'Эльф',
            id: 'elf',
            description:
                'Эльфы — высокие и стройные существа с острыми ушами и глубоко посаженными глазами различных оттенков. Являются ли их родиной леса или потайные долины, все эльфы с самого детства отличаются боль-шей грацией, чем люди, пускай даже уступают последним в силе. Большинство эльфов живёт больше 300 лет. У них светлая кожа и волосы самых различных цветов, включая необычные оттенки вроде серебристого и синего.',
            src: 'src/assets/imgs/elf.png',
            raceFeatures: [
                {
                    id: 'dexterity',
                    startValue: 6,
                },
            ],
        },
        {
            label: 'Орк',
            id: 'orc',
            description:
                'Полуорки появляются на свет от связи человека с орком или же орка с другим полуорком. Плоды подобных союзов не очень любимы окружающими, поэтому происхождение полуорков доставляет им немало хлопот.',
            src: 'src/assets/imgs/orc.png',
            raceFeatures: [
                {
                    id: 'strength',
                    startValue: 6,
                },
                {
                    id: 'brains',
                    maxVal: 8,
                },
            ],
        },
    ]

    const chosenRace = ref(raceList[0])

    function setRace(incomingData: any) {
        chosenRace.value = incomingData
    }
    return {
        raceList,
        chosenRace,
        setRace,
    }
})
