import { SessionsPage } from "./sessionsPage"

export const filterByParams = async (page, { sessionsData }) => {
    const sessionsPage = new SessionsPage(page)

    const activateFilters = []

    const fillFiled = {
        day: sessionsPage.fillDay.bind(sessionsPage),
        guide: sessionsPage.fillGuide.bind(sessionsPage),
        type: sessionsPage.fillType.bind(sessionsPage),
        location: sessionsPage.fillLocation.bind(sessionsPage)
    }

    for (const [field, value] of Object.entries(sessionsData)) {
        if (value) {
            await fillFiled[field](value)
            activateFilters.push(value)
        }
    }
}

