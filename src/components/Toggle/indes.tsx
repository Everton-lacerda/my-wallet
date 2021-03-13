import React from 'react';

import { Container, ToogleLabel, ToogleSelector } from './styles';

const Toggle: React.FC = () => (
    <Container>
        <ToogleLabel>Light</ToogleLabel>
        <ToogleSelector 
            checked={true}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => console.log('mudou')}
        />
        <ToogleLabel>Dark</ToogleLabel>
    </Container>
) 

export default Toggle;