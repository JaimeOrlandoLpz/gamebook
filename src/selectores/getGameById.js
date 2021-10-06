import { juegos } from '../datos/juegos';

export const getGameById = (id) => {
    return juegos.find(juego => juego.id === id);
}