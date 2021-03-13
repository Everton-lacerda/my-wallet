import React from 'react';

import { Container,TitleContainer, Controllers} from './style'

const ContentHeader: React.FC = () => {
    return (
        <Container >
            <TitleContainer >
                <h1>Content header</h1>
            </TitleContainer>
            <Controllers>
                <button type="button"> Botão A </button>
                <button type="button"> Botão B </button>
            </Controllers>
        </Container>
    );
}

export default ContentHeader