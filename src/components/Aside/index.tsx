import React from 'react';

import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title } from './style'

import logoimg from '../../assets/logo.svg'

import { 
   MdDashboard,
   MdArrowDownward,
   MdArrowUpward,
   MdExitToApp 
    
} from 'react-icons/md';


const Aside: React.FC = () => {
    return (
        <Container >
            <Header>
                <LogoImg src={logoimg} alt="logo minha wallet" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#" >
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#" >
                    <MdArrowDownward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#" >
                    <MdArrowUpward />
                    Saidas
                </MenuItemLink>
                <MenuItemLink href="#" >
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside