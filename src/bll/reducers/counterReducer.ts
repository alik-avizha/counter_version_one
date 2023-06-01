
export type CounterType = {
    count: number,
    minValue: number,
    maxValue: number,
    settingsChanged: boolean,
    isError: boolean
}

const initialState: CounterType =
    {
        count: 0,
        minValue: 0,
        maxValue:  5,
        settingsChanged: true,
        isError: false
    }

export const counterReducer = (state: CounterType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'CHANGE-VALUES':
            return {
                ...state,
                count: action.payload.valueMin,
                minValue: action.payload.valueMin,
                maxValue: action.payload.valueMax
            }
        case 'INC':
            return {...state, count: state.count + 1}
        case 'RESET':
            return {...state, count: state.minValue}
        case 'SETTINGS-CHANGED':
            return {...state, settingsChanged: action.payload.edit}
        case 'ERROR-CHANGED':
            return {...state, isError: action.payload.edit}
        default:
            return state
    }
}
type ActionsType =
    ChangeValuesACType
    | IncACACType
    | ResetACType
    | ChangeEditModeType
    | ErrorChangeModeACModeType

type ChangeValuesACType = ReturnType<typeof changeValuesAC>
export const changeValuesAC = (valueMin: number, valueMax: number) => {
    return {
        type: 'CHANGE-VALUES',
        payload: {
            valueMin,
            valueMax
        }
    } as const
}

type IncACACType = ReturnType<typeof incAC>
export const incAC = () => {
    return {
        type: 'INC'
    } as const
}

type ResetACType = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: 'RESET'
    } as const
}

type ChangeEditModeType = ReturnType<typeof changeEditModeAC>
export const changeEditModeAC = (edit: boolean) => {
    return {
        type: 'SETTINGS-CHANGED',
        payload: {
            edit
        }
    } as const
}

type ErrorChangeModeACModeType = ReturnType<typeof errorChangeModeAC>
export const errorChangeModeAC = (edit: boolean) => {
    return {
        type: 'ERROR-CHANGED',
        payload: {
            edit
        }
    } as const
}

