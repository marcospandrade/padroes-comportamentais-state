import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextoProvider } from './hooks/context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <ContextoProvider>
            <App />
        </ContextoProvider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
