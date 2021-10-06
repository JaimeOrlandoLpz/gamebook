import { juegos } from '../datos/juegos';
export const getGamesByPlatform = (plataforma) => {
    const plataformas = ['PlayStation','Xbox','Nintendo Switch','PC'];
    if(!plataformas.includes(plataforma)){
        throw new Error(`La plataforma "${plataforma}" no se encuentra registrada en la aplicación.`);
    } 
    return juegos.filter(juego => juego.plataforma === plataforma);

}