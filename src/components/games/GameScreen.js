import React, {useMemo} from 'react';
import { Redirect, useParams } from 'react-router';
import { getGameById } from '../../selectores/getGameById';

export const GameScreen = ({history}) => {
    const { gameId } = useParams();
    const juego = useMemo(() => getGameById(gameId), [gameId]);

    if (!juego) {return <Redirect to="/" />}

    const handleRegresar = () => {history.goBack();}

    const { id, nombre, plataforma, developer, personaje_principal } = juego;

    return (
    <>
        <img src={`../assets/${juego.id}.jpg`} alt={juego.id} />
        <div className="card-body">
            <h5 className="card-title">
                {juego.nombre}
            </h5>
            <p className="card-text">{juego.developer}</p>
            <p className="card-text">{juego.personaje_principal}</p>
            <button className="btn btn-outline-info"onClick={handleRegresar}>Regresar</button>
        </div>            
    </>);
}