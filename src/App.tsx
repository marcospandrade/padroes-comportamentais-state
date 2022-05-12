import { useState } from 'react';
import './App.css';
import { ButtonChangeRota } from './components/ButtonChangeDarkMode';
import { Routes } from './routes';

function App() {
    const [rota, setRota] = useState('');
    return (
        <>
            <input
                type="text"
                onChange={value => setRota(value.target.value)}
            />
            <ButtonChangeRota rota={rota} />
            <Routes />
        </>
    );
}

export default App;
