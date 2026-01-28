import { createTestData } from "../../utils/testData"
import { DAYS, LOCATIONS, GUIDES, TYPES } from "../../utils/constants"
import { pickRandomValue } from "../../utils/random"

export const SESSIONS_TEST_DATA = [
    createTestData({
        sessionsData: {
            day: pickRandomValue(DAYS)
        },
        testDescription: 'day'
    }),
    /*createTestData({
        sessionsData: {
            location: pickRandomValue(LOCATIONS)
        },
        testDescription: 'location'
    }),
    createTestData({
        sessionsData: {
            guide: pickRandomValue(GUIDES)
        },
        testDescription: 'guide'
    }),*/
    createTestData({
        sessionsData: {
            type: pickRandomValue(TYPES)
        },
        testDescription: 'type'
    }),
    /*createTestData({
        sessionsData: {
            day: DAYS.SUNDAY,
            guide: GUIDES.DEAFULT,
            type: TYPES.GOLDEN_AGE,
            location: LOCATIONS.TEL_AVIV
        },
        testDescription: 'all filters'
    })*/
]