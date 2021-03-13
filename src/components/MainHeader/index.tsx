import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle/indes';

import { Container, Profile, Welcome, UserName } from './style'


const MainHeader: React.FC = () => {

    const emoji: string = useMemo(() => {
        const i = Math.floor(Math.random() * emojis.length);
        return emojis[i];
    }, []);


    return (
        <Container >
           <Toggle />
            <Profile>
                <Welcome>Olá, {emoji}
                </Welcome>
                <UserName>Everton Marques</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader