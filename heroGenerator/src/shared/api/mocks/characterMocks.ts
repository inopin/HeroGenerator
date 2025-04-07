import { Param, Race } from '../types/serviceTypes'

const RaceList: Race[] = [
    {
        label: 'Человек',
        id: 'human',
        description:
            'В большинстве фэнтези миров люди получают традиционное преимущество в виде одной бесплатной черты на выбор. Данная особенность отражает их способность к адаптации, отличающую людей от представителей иных рас.',
        iconSrc: 'src/assets/imgs/human.png',
        features: {},
    },
    {
        label: 'Эльф',
        id: 'elf',
        description:
            'Эльфы — высокие и стройные существа с острыми ушами и глубоко посаженными глазами различных оттенков. Являются ли их родиной леса или потайные долины, все эльфы с самого детства отличаются боль-шей грацией, чем люди, пускай даже уступают последним в силе. Большинство эльфов живёт больше 300 лет. У них светлая кожа и волосы самых различных цветов, включая необычные оттенки вроде серебристого и синего.',
        iconSrc: 'src/assets/imgs/elf.png',
        features: {
            paramsModify: [
                {
                    id: 'dexterity',
                    startVal: 6,
                },
            ],
        },
    },
    {
        label: 'Орк',
        id: 'orc',
        description:
            'Полуорки появляются на свет от связи человека с орком или же орка с другим полуорком. Плоды подобных союзов не очень любимы окружающими, поэтому происхождение полуорков доставляет им немало хлопот.',
        iconSrc: 'src/assets/imgs/orc.png',
        features: {
            paramsModify: [
                {
                    id: 'strength',
                    startVal: 6,
                },
                { id: 'brains', maxVal: 8 },
            ],
        },
    },
]

const ParamsList: Param[] = [
    {
        id: 'dexterity',
        label: 'dexterity',
        labelTitle: 'ловкость',
        startVal: 4,
        minVal: 4,
        maxVal: 12,
    },
    {
        id: 'strength',
        label: 'strength',
        labelTitle: 'сила',
        startVal: 4,
        minVal: 4,
        maxVal: 12,
    },
    {
        id: 'brains',
        label: 'brains',
        labelTitle: 'смекалка',
        startVal: 4,
        minVal: 4,
        maxVal: 12,
    },
    {
        id: 'temper',
        label: 'temper',
        labelTitle: 'характер',
        startVal: 4,
        minVal: 4,
        maxVal: 12,
    },
    {
        id: 'stamina',
        label: 'stamina',
        labelTitle: 'выносливость',
        startVal: 4,
        minVal: 4,
        maxVal: 12,
    },
]

export { RaceList, ParamsList }
