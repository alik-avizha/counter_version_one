import React from 'react';
import {Monitor} from './Monitor/Monitor';
import {Button} from '../common/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootAppType} from '../../bll/store';
import {CounterType, incAC, resetAC} from '../../bll/reducers/counterReducer';

export const Counter = () => {

    const state = useSelector<RootAppType, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    const disabledReset = state.count === state.minValue
    const disabledINC = state.count === state.maxValue

    const incrementHandler = () => {
        const action = incAC()
        dispatch(action)
    }
    const resetHandler = () => {
        const action = resetAC()
        dispatch(action)
    }

    return (
        <div className={'general'}>
            {state.settingsChanged ? (
                <Monitor count={state.count} maxValue={state.maxValue}/>
            ) : (
                state.isError ? (
                    <p className={'settings-error'}>Введите корректное значение</p>
                ) : (
                    <p className={'settings'}>Отправьте настройки</p>
                )
            )}
            <div className={'buttons'}>
                <Button name="INC" disabled={disabledINC} callBack={incrementHandler}/>
                <Button name="RESET" disabled={disabledReset} callBack={resetHandler}/>
            </div>
        </div>
    )
}