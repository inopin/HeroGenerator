import { Param, Race } from './serviceTypes'

export type Character = {
    fio?: string
    age?: number
    race: Race
    param: Param
    perks?: [] // в разработке
}
