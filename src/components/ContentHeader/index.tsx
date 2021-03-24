import React from 'react';

import { Container,TitleContainer, Controllers} from './style'

interface IContentHeaderProps {
    title: string;
    lineColer: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColer, children
}) => { 

    return (
        <Container>
            <TitleContainer lineColer={lineColer}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
               {children} 
            </Controllers>
        </Container>
    );
}

export default ContentHeader