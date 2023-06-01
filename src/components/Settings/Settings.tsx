import React, {useState} from 'react';
import {Button} from '../common/Button';
import {Input} from '../common/Input';
import {useDispatch, useSelector} from 'react-redux';
import {RootAppType} from '../../bll/store';
import {changeEditModeAC, changeValuesAC, CounterType, errorChangeModeAC} from '../../bll/reducers/counterReducer';


export const SettingsOfCounter = () => {

    const state = useSelector<RootAppType, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    const [titleMin, setTitleMin] = useState<number>(state.minValue);
    const [titleMax, setTitleMax] = useState<number>(state.maxValue);
    const [disabled, setDisabled] = useState<boolean>(true)

    const maxValueHandler = (value: string) => {
        setTitleMax(+value)
        if (+value < 0 || +value <= titleMin) {
            dispatch(errorChangeModeAC(true))
            setDisabled(true)
        } else {
            dispatch(errorChangeModeAC(false))
            setDisabled(false)
        }
        dispatch(changeEditModeAC(false))
    }
    const minValueHandler = (value: string) => {
        setTitleMin(+value)
        if (+value < 0 || +value >= titleMax) {
            dispatch(errorChangeModeAC(true))
            setDisabled(true)
        } else {
            dispatch(errorChangeModeAC(false))
            setDisabled(false)
        }
        dispatch(changeEditModeAC(false))
    }

    const disableMaxInput = titleMax < 0 || titleMin >= titleMax ? 'input-error' : 'input'
    const disableMinInput = titleMin < 0 || titleMin >= titleMax ? 'input-error' : 'input'
    const disabledButtonSettings = disabled

    const onSetHandler = () => {
        dispatch(changeValuesAC(titleMin,titleMax))
        dispatch(changeEditModeAC(true))
        setDisabled(true)
    }

    return (
        <div className={'general'}>
            <div className={'input-settings'}>
                <Input className={disableMaxInput} callback={maxValueHandler} value={titleMax} name={'max value'}/>
                <Input className={disableMinInput} callback={minValueHandler} value={titleMin} name={'start value'}/>
            </div>
            <div className={'buttons'}>
                <Button name="SET" callBack={onSetHandler} disabled={disabledButtonSettings}/>
            </div>
        </div>
    )
}