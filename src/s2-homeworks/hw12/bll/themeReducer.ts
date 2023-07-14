
type initStateType = {
    themeId: number
}
const initState = {
    themeId: 1,
}


export const themeReducer = (state: initStateType = initState, action: combineActionType): initStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {themeId: action.id}
        }

        // дописать

        default:
            return state
    }
}

type combineActionType = changeThemeIdType


type changeThemeIdType = ReturnType<typeof changeThemeId>
type ChangeThemeIdAction = {
    type: 'SET_THEME_ID',
    id: number,
}


export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
