export type Param = {
    id?: string
    label?: string
    labelTitle?: string
    startVal?: number
    minVal?: number
    maxVal?: number
}

export type Race = {
    label: string
    id: string
    description: string
    iconSrc: string
    features: {
        perksNumber?: string
        perks?: [] // в разработке
        paramsModify?: Param[]
        skillsModify?: {
            //  в разработке
        }
    }
}
