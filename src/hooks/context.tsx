import { createContext, ReactNode, useContext } from 'react';

interface ContextoData {
    onChangeRota: (rota: string) => void;
}

interface ContextoProviderProps {
    children: ReactNode;
}

const Contexto = createContext<ContextoData>({} as ContextoData);

function ContextoProvider({ children }: ContextoProviderProps) {
    const rotasPossiveis = ['', 'dark', 'normal', 'cadastro'];

    function onChangeRota(rota: string) {
        if (rotasPossiveis.includes(rota)) {
            window.location.pathname = rota;
        }
    }

    return (
        <Contexto.Provider
            value={{
                onChangeRota
            }}
        >
            {children}
        </Contexto.Provider>
    );
}

function useContexto() {
    const context = useContext(Contexto);

    return context;
}

export { ContextoProvider, useContexto };
