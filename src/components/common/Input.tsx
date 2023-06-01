import React, {ChangeEvent} from 'react';

type InputPropsType = {
    className: string
    callback: (value: string) => void
    value: number
    name: string
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }
    return (
        <div className={'inputAndText'}>
            <input type={'number'} className={props.className} onChange={onChangeHandler} value={props.value}/>
            <span className={'text'}>{props.name}</span>
        </div>
    );
};