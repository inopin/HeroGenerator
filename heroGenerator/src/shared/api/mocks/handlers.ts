import { http } from 'msw'
import { RaceList, ParamsList } from './characterMocks'
import { Race } from '../types/serviceTypes'

export const handlers = [
    http.get('/shared/api/mocks/characterMocks', () => {
        const responseData = {
            races: RaceList,
            params: ParamsList,
        }

        return new Response(JSON.stringify(responseData), {
            headers: { 'Content-Type': 'application/json' },
        })
    }),
]
