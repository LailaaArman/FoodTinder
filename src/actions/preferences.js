import { SET_PREFERENCES } from './types'

export const setPreferences = (preferences) => ({
    type: SET_PREFERENCES,
    data: preferences
})
