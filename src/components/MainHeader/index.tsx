import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';

import { Container, Profile, Welcome, UserName } from './style'


const MainHeader: React.FC = () => {

    const emoji: string = useMemo(() => {
        const i = Math.floor(Math.random() * emojis.length);
        return emojis[i];
    }, []);


    return (
        <Container >
            <h1>Toogle</h1>
            <Profile>
                <Welcome>Olá, {emoji}
                </Welcome>
                <UserName>Everton Marques</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader