import {combineReducers, legacy_createStore as createStore} from 'redux'
import {counterReducer} from './reducers/counterReducer';
import {loadState, saveState} from '../utils/localstorage-utils';


const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootAppType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

store.subscribe(()=>{
   saveState({
       counter: store.getState().counter
   })
})


type AppStoreType = typeof store