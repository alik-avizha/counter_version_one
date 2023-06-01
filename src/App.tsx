import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingsOfCounter} from './components/Settings/Settings';

const App = () => {

    return (
        <div className="App">
            <Counter />
            <SettingsOfCounter />
        </div>
    );
}
export default App;
