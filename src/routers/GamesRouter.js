import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/comunes/Navbar';
import { GameScreen } from '../components/games/GameScreen';
import { PcScreen } from '../components/pc/PcScreen';
import { PsScreen } from '../components/ps/PsScreen';
import { SwitchScreen } from '../components/switch/SwitchScreen';
import { XboxScreen } from '../components/xbox/XboxScreen';

export const GamesRouter = () => {
    return (
    <><Navbar />
        <div>
            <Switch>
                <Route exact path="/ps" component={PsScreen} />                     
                <Route exact path="/xbox" component={XboxScreen} />
                <Route exact path="/switch" component={SwitchScreen} />
                <Route exact path="/pc" component={PcScreen} />
                <Route exact path="/game/:gameId" component={GameScreen} />
                <Redirect to="/ps" />
            </Switch>
        </div></>);
    }