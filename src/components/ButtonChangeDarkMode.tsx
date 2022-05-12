import { useContexto } from '../hooks/context';

interface ButtonChangeRotaProps {
    rota: string;
}

export function ButtonChangeRota({ rota }: ButtonChangeRotaProps) {
    const { onChangeRota } = useContexto();

    return <button onClick={() => onChangeRota(rota)}>{'Change Rota'}</button>;
}
