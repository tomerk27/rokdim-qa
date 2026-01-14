import { SessionsPage } from "./sessionsPage"

export const filterByParams = async (page, { sessionsData }) => {
    const sessionsPage = new SessionsPage(page)

    const {
        day,
        guide,
        type,
        location
    } = sessionsData

    if (day) {
        await sessionsPage.fillDay(day)
        await sessionsPage.checkFilter(day)
    }

    if (guide) {
        await sessionsPage.fillGuide(guide)
        await sessionsPage.checkFilter(guide)

    }

    if (type) {
        await sessionsPage.fillType(type)
        await sessionsPage.checkFilter(type)

    }

    if (location) {
        await sessionsPage.fillLocation(location)
        await sessionsPage.checkFilter(location)
    }
}

