import React, {useMemo} from 'react';
import { getGamesByPlatform } from '../../selectores/getGamesByPlatform';
import { GameCard } from './GameCard';

export const GameListScreen = ({ plataforma }) => {
    const juegos = useMemo(() => getGamesByPlatform(plataforma), [plataforma]);
    return(
        <>
            <ul>
                {juegos.map(juego => (
                    <GameCard key={juego.id}juego = {juego}/>))
                    }
            </ul>
        </>
    );
}