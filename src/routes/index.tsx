import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { DarkBox } from '../components/DarkBox';
import { NormalBox } from '../components/NormalBox';
import { PaginaCadastro } from '../components/PaginaCadastro';

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<h1>Start</h1>} />
                <Route path="/dark" element={<DarkBox />} />
                <Route path="/normal" element={<NormalBox />} />
                <Route path="/cadastro" element={<PaginaCadastro />} />
            </Switch>
        </BrowserRouter>
    );
}
