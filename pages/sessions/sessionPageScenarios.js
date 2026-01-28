import { SessionsPage } from "./sessionsPage"

export const filterByParams = async (page, { sessionsData }) => {
    const sessionsPage = new SessionsPage(page)

    const {
        day,
        guide,
        type,
        location
    } = sessionsData

    const activateFilters = []

    if (day) {
        await sessionsPage.fillDay(day)
        activateFilters.push(day)
    }

    if (guide) {
        await sessionsPage.fillGuide(guide)
        activateFilters.push(guide)

    }

    if (type) {
        await sessionsPage.fillType(type)
        activateFilters.push(type)

    }

    if (location) {
        await sessionsPage.fillLocation(location)
        activateFilters.push(location)
    }

    await sessionsPage.checkFilter(activateFilters)
}

