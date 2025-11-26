import dotenv from 'dotenv'
dotenv.config()

export const createTestData = (testData = {}) => {
    const {
        userData,
        danceData
    } = testData

    return {
        userData: createUserTestData(userData),
        danceData: createDanceData(danceData)
    }
}

export const createUserTestData = (userData = {}) => {
    const {
        email,
        password, 
        username
    } = userData

    return {
        email: email ?? process.env.END_USER_MAIL, 
        password: password ?? process.env.END_USER_PASSWORD,
        username: username ?? process.env.END_USER_USERNAME
    }
}

export const createDanceData = (danceData = {}) => {
    const {
        danceName,
        choreographers,
        performers,
        lyricists,
        composers,
        shape,
        yearFrom,
        yearTo
    } = danceData

    return {
        danceName: danceName ??  'Hine Ma Tov',
        choreographers: choreographers ?? 'Shturman Rivka z"l',
        performers: performers ?? 'Gil Geula',
        lyricists: lyricists ?? 'Mekorot',
        composers: composers ?? 'Yakobson Moshe',
        shape: shape ?? 'Circle',
        yearFrom: yearFrom ?? '1949',
        yearTo: yearTo ?? '1951'
    }
}
