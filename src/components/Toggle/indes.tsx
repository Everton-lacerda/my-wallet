import React, {useState} from 'react';

import { Container, ToogleLabel, ToogleSelector } from './styles';


const Toggle: React.FC = () => {
    const [theme, setTheme] = useState(true);
    return (
        <Container>
            <ToogleLabel>Light</ToogleLabel>
                <ToogleSelector 
                    checked={theme}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onChange={() => setTheme(!theme)}
                />
            <ToogleLabel>Dark</ToogleLabel>
        </Container>
    )
}

export default Toggle;